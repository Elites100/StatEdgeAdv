const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, '..', 'src', 'components', 'ui');
const files = fs.readdirSync(uiDir).filter(f => f.endsWith('.jsx'));

const aliasMap = {
  '"react"': 'React',
  '"@radix-ui/react-tooltip"': 'TooltipPrimitive',
  '"@radix-ui/react-dialog"': 'DialogPrimitive',
  '"@radix-ui/react-label"': 'LabelPrimitive',
  '"@radix-ui/react-progress"': 'ProgressPrimitive',
  '"@radix-ui/react-scroll-area"': 'ScrollAreaPrimitive',
  '"@radix-ui/react-separator"': 'SeparatorPrimitive',
  '"@radix-ui/react-slider"': 'SliderPrimitive',
  '"@radix-ui/react-select"': 'SelectPrimitive',
  '"@radix-ui/react-checkbox"': 'CheckboxPrimitive',
  '"@radix-ui/react-avatar"': 'AvatarPrimitive',
  '"@radix-ui/react-alert-dialog"': 'AlertDialogPrimitive',
  '"@radix-ui/react-collapsible"': 'CollapsiblePrimitive',
  '"@radix-ui/react-accordion"': 'AccordionPrimitive',
  '"@radix-ui/react-toast"': 'ToastPrimitives',
  '"@radix-ui/react-popover"': 'PopoverPrimitive',
  '"@radix-ui/react-context-menu"': 'ContextMenuPrimitive',
  '"@radix-ui/react-navigation-menu"': 'NavigationMenuPrimitive',
  '"@radix-ui/react-menubar"': 'MenubarPrimitive',
  '"@radix-ui/react-dropdown-menu"': 'DropdownMenuPrimitive',
  '"@radix-ui/react-dialog"': 'DialogPrimitive',
  '"@radix-ui/react-tabs"': 'TabsPrimitive',
  '"@radix-ui/react-radio-group"': 'RadioGroupPrimitive',
};

files.forEach(file => {
  const p = path.join(uiDir, file);
  let s = fs.readFileSync(p, 'utf8');

  // Fix import *"module"; -> import * as Alias from "module";
  s = s.replace(/import \*"([^"]+)";/g, (m, mod) => {
    const key = '"' + mod + '"';
    const alias = aliasMap[key] || 'Unknown';
    return `import * as ${alias} from "${mod}";`;
  });

  // Fix React import if still contains Unknown alias
  s = s.replace(/import \* as Unknown from "react";/g, 'import * as React from "react";');

  // Replace any remaining 'React.forwardRef<...>(' (multiline safe)
  s = s.replace(/React\.forwardRef<[\s\S]*?>\(/g, 'React.forwardRef(');

  // Remove leftover TypeScript 'type' export lines
  s = s.replace(/export\s*\{\s*type[^}]+\};?/g, '');

  // Remove stray sequences like 'toast-close=""' which were from TS attrs
  s = s.replace(/\s+toast-close=""/g, '');

  // Replace 'className={cn,     className,' malformations (from earlier corruption) -- try to fix common broken cva lines
  s = s.replace(/import\s*\{\s*cva,\s*/g, 'import { cva, ');

  // Remove leftover ': any' inside forwardRef generic remnants (if any)
  s = s.replace(/<any,\s*any>/g, '');

  // Write back
  fs.writeFileSync(p, s, 'utf8');
  console.log('Repaired', file);
});

console.log('Done');
