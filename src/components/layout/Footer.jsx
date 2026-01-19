import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                STAT<span className="text-primary">EDGE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Advanced player analytics and comparison tools for informed sports research. 
              This platform is for educational and entertainment purposes only.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Compare Players
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Betting Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Privacy Policy</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 StatEdge. All rights reserved. Demo purposes only.
            </p>
            <p className="text-muted-foreground text-xs">
              ⚠️ For educational purposes only. Not intended for real betting.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
