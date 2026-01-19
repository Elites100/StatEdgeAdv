import { Layout } from '@/components/layout/Layout';
import { AlertTriangle, Shield, Info, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              ABOUT <span className="text-gradient">STATEDGE</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Understanding our platform and responsible use
            </p>
          </div>

          {/* About Section */}
          <div className="rounded-xl border border-border bg-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">What is StatEdge?</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                StatEdge is a demonstration sports analytics platform designed to showcase player comparison 
                tools and betting research features. This is a <strong className="text-foreground">fictional platform</strong> created 
                for demonstration purposes only.
              </p>
              <p>
                All player data, statistics, teams, and betting insights shown on this platform are 
                <strong className="text-foreground"> entirely fictional and randomly generated</strong>. No real players, teams, 
                or actual sports statistics are used.
              </p>
              <p>
                The platform demonstrates modern UI/UX patterns for sports analytics websites, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Side-by-side player comparison tools</li>
                <li>Interactive trend charts and data visualizations</li>
                <li>Betting-style analytics and prop trend displays</li>
                <li>Responsive, mobile-friendly design</li>
                <li>Modern dark theme aesthetics common in sports betting apps</li>
              </ul>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h2 className="font-display text-2xl font-bold">Important Disclaimer</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">
                This platform is NOT intended for real sports betting or gambling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>All data is fictional and should not be used for actual betting decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Past performance (real or simulated) does not guarantee future results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>This is a demonstration project for educational and portfolio purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>No real money should be wagered based on any information shown here</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsible Gambling */}
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-yellow-500" />
              <h2 className="font-display text-2xl font-bold">Responsible Gambling</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you do participate in real sports betting, please do so responsibly:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Never bet more than you can afford to lose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Set strict limits on your gambling activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Take breaks and don't chase losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Seek help if gambling becomes a problem</span>
                </li>
              </ul>
              
              <div className="pt-4 border-t border-yellow-500/20">
                <p className="font-semibold text-foreground mb-3">Resources for Help:</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.ncpgambling.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-500 hover:underline"
                  >
                    National Council on Problem Gambling <ExternalLink className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://www.gamblingtherapy.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-500 hover:underline"
                  >
                    Gambling Therapy <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-sm">
                    National Problem Gambling Helpline: <strong className="text-foreground">1-800-522-4700</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Info */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Technical Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This demo was built using modern web technologies:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  React 18
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Recharts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  shadcn/ui
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  React Router
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
