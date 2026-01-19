import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart3, Target, Flame } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { PlayerCard } from '@/components/players/PlayerCard';
import { mockPlayers, featuredComparisons, getPlayerById } from '@/lib/mockData';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
              <Flame className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced Player Analytics</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              DOMINATE YOUR
              <br />
              <span className="text-gradient">RESEARCH</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Compare players side-by-side, analyze trends, and uncover betting insights 
              with the most powerful sports analytics platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/compare">
                <Button variant="hero" size="xl" className="gap-2">
                  Start Comparing
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/insights">
                <Button variant="outline" size="xl">
                  View Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              EVERYTHING YOU NEED
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools designed for serious sports research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Player Comparison',
                description: 'Side-by-side analysis with detailed stat breakdowns and visual charts',
              },
              {
                icon: BarChart3,
                title: 'Trend Analysis',
                description: 'Track performance over last 5-10 games with interactive visualizations',
              },
              {
                icon: Target,
                title: 'Prop Insights',
                description: 'Prop line hit rates, consistency ratings, and boom/bust indicators',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                FEATURED MATCHUPS
              </h2>
              <p className="text-muted-foreground">
                Popular player comparisons this week
              </p>
            </div>
            <Link to="/compare">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredComparisons.slice(0, 2).map((comp, index) => {
              const player1 = getPlayerById(comp.player1Id);
              const player2 = getPlayerById(comp.player2Id);
              if (!player1 || !player2) return null;

              return (
                <Link
                  key={index}
                  to={`/compare?p1=${comp.player1Id}&p2=${comp.player2Id}`}
                  className="group"
                >
                  <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary">{comp.title}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                          {player1.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{player1.name}</p>
                          <p className="text-sm text-muted-foreground">{player1.stats.points} PPG</p>
                        </div>
                      </div>
                      <span className="text-2xl font-display font-bold text-muted-foreground">VS</span>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{player2.name}</p>
                          <p className="text-sm text-muted-foreground">{player2.stats.points} PPG</p>
                        </div>
                        <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center text-lg font-bold text-accent">
                          {player2.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                TOP PERFORMERS
              </h2>
              <p className="text-muted-foreground">
                Players with the best betting value this week
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPlayers.map((player, index) => (
              <div key={player.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PlayerCard player={player} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl border border-border bg-card p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                READY TO GET THE EDGE?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Start comparing players and uncover insights that give you the advantage in your research.
              </p>
              <Link to="/compare">
                <Button variant="hero" size="xl" className="gap-2">
                  Start Free Comparison
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
