import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flame, TrendingUp, Calendar, Target } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GameLogChart } from '@/components/players/GameLogChart';
import { PropTrendCard } from '@/components/players/PropTrendCard';
import { getPlayerById } from '@/lib/mockData';
import { cn } from '@/lib/utils';

const PlayerProfile = () => {
  const { id } = useParams();
  const player = getPlayerById(id || '');

  if (!player) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Player Not Found</h1>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const getBoomBustColor = (indicator) => {
    switch (indicator) {
      case 'Boom':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Steady':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Bust':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {/* Player Header */}
          <div className="rounded-xl border border-border bg-card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </div>
                {player.bettingInsights.hotStreak && (
                  <div className="absolute -top-1 -right-1 flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                    <Flame className="h-3 w-3" />
                    HOT
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{player.name}</h1>
                <p className="text-muted-foreground text-lg mb-3">{player.team}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{player.position}</Badge>
                  <Badge variant="secondary">{player.sport}</Badge>
                  <Badge className={getBoomBustColor(player.bettingInsights.boomBustIndicator)}>
                    {player.bettingInsights.boomBustIndicator}
                  </Badge>
                </div>
              </div>

              <Link to={`/compare?p1=${player.id}`}>
                <Button variant="hero" className="gap-2">
                  <Target className="h-4 w-4" />
                  Compare Player
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {player.stats.points !== undefined && (
              <div className="p-4 rounded-xl border border-border bg-card text-center">
                <p className="text-3xl font-bold text-primary">{player.stats.points}</p>
                <p className="text-sm text-muted-foreground">PPG</p>
              </div>
            )}
            {player.stats.assists !== undefined && (
              <div className="p-4 rounded-xl border border-border bg-card text-center">
                <p className="text-3xl font-bold text-foreground">{player.stats.assists}</p>
                <p className="text-sm text-muted-foreground">APG</p>
              </div>
            )}
            {player.stats.rebounds !== undefined && (
              <div className="p-4 rounded-xl border border-border bg-card text-center">
                <p className="text-3xl font-bold text-foreground">{player.stats.rebounds}</p>
                <p className="text-sm text-muted-foreground">RPG</p>
              </div>
            )}
            <div className="p-4 rounded-xl border border-border bg-card text-center">
              <p className="text-3xl font-bold text-accent">{player.stats.efficiency}</p>
              <p className="text-sm text-muted-foreground">EFF</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card text-center">
              <p className="text-3xl font-bold text-foreground">{player.stats.usageRate}%</p>
              <p className="text-sm text-muted-foreground">USG%</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card text-center">
              <p className="text-3xl font-bold text-primary">{player.bettingInsights.consistencyRating}%</p>
              <p className="text-sm text-muted-foreground">Consistency</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Games */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-bold">Last 5 Games</h2>
              </div>

              <GameLogChart games={player.recentGames} dataKey="points" label="Points" />

              <div className="mt-6 space-y-2">
                {player.recentGames.map((game, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant={game.result === 'W' ? 'default' : 'destructive'} className="w-8 justify-center">
                        {game.result}
                      </Badge>
                      <span className="text-sm text-muted-foreground">vs {game.opponent}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold">{game.points} PTS</span>
                      <span className="text-muted-foreground">{game.assists} AST</span>
                      <span className="text-muted-foreground">{game.rebounds} REB</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Betting Insights */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-bold">Betting Insights</h2>
              </div>

              <div className="space-y-4 mb-6">
                {player.bettingInsights.propTrends.map((trend, i) => (
                  <PropTrendCard key={i} trend={trend} />
                ))}
              </div>

              <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consistency Rating</span>
                    <span className="font-bold text-primary">{player.bettingInsights.consistencyRating}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Player Type</span>
                    <Badge className={getBoomBustColor(player.bettingInsights.boomBustIndicator)}>
                      {player.bettingInsights.boomBustIndicator}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">O/U Record (L10)</span>
                    <span className="font-bold">
                      <span className="text-primary">{player.bettingInsights.overUnderRecord.over}O</span>
                      {' / '}
                      <span className="text-destructive">{player.bettingInsights.overUnderRecord.under}U</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hot Streak</span>
                    <span className={cn('font-bold', player.bettingInsights.hotStreak ? 'text-primary' : 'text-muted-foreground')}>
                      {player.bettingInsights.hotStreak ? 'Yes 🔥' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlayerProfile;
