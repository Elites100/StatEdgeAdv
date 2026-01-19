const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, '..', 'src', 'components', 'ui');

function getFiles(dir) {
  return fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
}

function convert(content) {
  // 1) Remove TypeScript interface/type blocks (simple heuristic)
  content = content.replace(/(?:export\s+)?(?:interface|type)\s+\w[\s\S]*?\}\s*\n/g, '');
  content = content.replace(/(?:export\s+)?type\s+\w+\s*=\s*[^;\n]+;?\n/g, '');

  // 2) Remove React.forwardRef generics
  content = content.replace(/React\.forwardRef<[^>]+>\(/g, 'React.forwardRef(');

  // 3) Remove type annotations on parameters within parentheses: ({ a, b }: Props) =>  -> ({ a, b }) =>
  content = content.replace(/\)\s*:\s*[^=,;\)]+(?=\s*[=>,)])/g, ')');
  content = content.replace(/:\s*[A-Za-z0-9_<>\[\]{}., \|]+(?=\s*[,)\n])/g, '');

  // 4) Remove `as` type assertions: foo as Bar
  content = content.replace(/\s+as\s+[A-Za-z0-9_<>\[\]{}., ]+/g, '');

  // 5) Remove leftover `: Type` annotations in variable declarations (const x: Type = ...)
  content = content.replace(/(:\s*[A-Za-z0-9_<>\[\]{}., \|]+)\s*=/g, ' =');

  // 6) Remove "export type" or "export interface" lines that may remain
  content = content.replace(/export\s+(type|interface)\s+[^\n]+\n/g, '');

  // 7) Remove TS-specific import of types like `import { type Foo } from '...';`
  content = content.replace(/import\s+\{\s*type\s+[^}]+\}\s+from\s+['"][^'"]+['"];?/g, '');

  // 8) Remove TS-specific non-null assertion operator '!'
  content = content.replace(/!\b/g, '');

  // 9) Remove any remaining 'React.ComponentProps<...>' patterns
  content = content.replace(/React\.ComponentProps<[^>]+>/g, 'any');
  content = content.replace(/React\.ComponentPropsWithoutRef<[^>]+>/g, 'any');
  content = content.replace(/React\.ElementRef<[^>]+>/g, 'any');

  // 10) Tidy up multiple blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  return content;
}

const files = getFiles(uiDir);

files.forEach(file => {
  const full = path.join(uiDir, file);
  const src = fs.readFileSync(full, 'utf8');
  const out = convert(src);
  const outFile = full.replace(/\.tsx$/, '.jsx');
  fs.writeFileSync(outFile, out, 'utf8');
  console.log('Converted', file, '->', path.basename(outFile));
});

console.log('Done converting', files.length, 'files');
