import { Link } from 'react-router-dom';
import { TrendingUp, Flame, Target, AlertTriangle, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockPlayers } from '@/lib/mockData';
import { cn } from '@/lib/utils';

const Insights = () => {
  const hotPlayers = mockPlayers.filter(p => p.bettingInsights.hotStreak);

  const consistentPlayers = [...mockPlayers].sort((a, b) => 
    b.bettingInsights.consistencyRating - a.bettingInsights.consistencyRating
  );

  const allTrends = mockPlayers.flatMap(p => 
    p.bettingInsights.propTrends.map(t => ({
      ...t,
      playerName: p.name,
      playerId: p.id,
    }))
  );

  const bestHitRates = allTrends.sort((a, b) => b.hitRate - a.hitRate).slice(0, 6);
  const upTrends = allTrends.filter(t => t.trend === 'up').slice(0, 4);

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              BETTING <span className="text-gradient">INSIGHTS</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Data-driven trends and prop analysis to inform your research. 
              For educational purposes only.
            </p>
          </div>

          {/* Hot Players Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">Hot Streaks</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hotPlayers.length > 0 ? (
                hotPlayers.map(player => (
                  <Link key={player.id} to={`/player/${player.id}`}>
                    <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{player.name}</p>
                          <p className="text-sm text-muted-foreground">{player.team}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">O/U Record</span>
                        <span className="font-bold">
                          <span className="text-primary">{player.bettingInsights.overUnderRecord.over}O</span>
                          {' / '}
                          <span className="text-destructive">{player.bettingInsights.overUnderRecord.under}U</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full p-8 text-center rounded-xl border border-dashed border-border bg-card/50">
                  <p className="text-muted-foreground">No players currently on hot streaks</p>
                </div>
              )}
            </div>
          </div>

          {/* Best Hit Rates */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-6 w-6 text-accent" />
              <h2 className="font-display text-2xl font-bold">Top Prop Hit Rates</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestHitRates.map((trend, i) => (
                <Link key={i} to={`/player/${trend.playerId}`}>
                  <div className="p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{trend.playerName}</p>
                        <p className="text-sm text-muted-foreground">{trend.prop} Line: {trend.line}</p>
                      </div>
                      <div className="text-right">
                        <p className={cn(
                          'text-2xl font-bold',
                          trend.hitRate >= 70 ? 'text-primary' : trend.hitRate >= 50 ? 'text-accent' : 'text-destructive'
                        )}>
                          {trend.hitRate}%
                        </p>
                        <p className="text-xs text-muted-foreground">Hit Rate</p>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={cn(
                          'h-full rounded-full transition-all duration-500',
                          trend.hitRate >= 70 ? 'bg-primary' : trend.hitRate >= 50 ? 'bg-accent' : 'bg-destructive'
                        )}
                        style={{ width: `${trend.hitRate}%` }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Trending Up */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">Trending Up</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upTrends.map((trend, i) => (
                <Link key={i} to={`/player/${trend.playerId}`}>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{trend.playerName}</p>
                        <p className="text-sm text-muted-foreground">{trend.prop}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{trend.hitRate}%</p>
                      <p className="text-xs text-muted-foreground">Line: {trend.line}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Consistency Leaders */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">Consistency Leaders</h2>
            </div>

            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 border-b border-border text-sm font-medium text-muted-foreground">
                <span>Player</span>
                <span>Type</span>
                <span>Consistency</span>
                <span>O/U Record</span>
              </div>
              {consistentPlayers.map((player, i) => (
                <Link key={player.id} to={`/player/${player.id}`}>
                  <div className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-secondary/30 transition-colors border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-mono text-sm">#{i + 1}</span>
                      <div>
                        <p className="font-semibold text-foreground">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.team}</p>
                      </div>
                    </div>
                    <Badge className={cn(
                      player.bettingInsights.boomBustIndicator === 'Boom' ? 'bg-primary/20 text-primary border-primary/30' :
                      player.bettingInsights.boomBustIndicator === 'Steady' ? 'bg-accent/20 text-accent border-accent/30' :
                      'bg-destructive/20 text-destructive border-destructive/30'
                    )}>
                      {player.bettingInsights.boomBustIndicator}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${player.bettingInsights.consistencyRating}%` }}
                        />
                      </div>
                      <span className="font-bold text-sm text-foreground">{player.bettingInsights.consistencyRating}%</span>
                    </div>
                    <span className="font-semibold">
                      <span className="text-primary">{player.bettingInsights.overUnderRecord.over}O</span>
                      {' / '}
                      <span className="text-destructive">{player.bettingInsights.overUnderRecord.under}U</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer Banner */}
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Educational Content Only</h3>
                <p className="text-muted-foreground text-sm">
                  This data is for informational and educational purposes only. Past performance does not guarantee future results. 
                  Always gamble responsibly and never bet more than you can afford to lose. 
                  If you or someone you know has a gambling problem, please seek help.
                </p>
                <Link to="/about">
                  <Button variant="link" className="p-0 h-auto text-yellow-500 hover:text-yellow-400 mt-2">
                    Read full disclaimer <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insights;
