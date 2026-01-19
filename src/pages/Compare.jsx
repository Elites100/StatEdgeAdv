import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeftRight, TrendingUp, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ComparisonSelector } from '@/components/comparison/ComparisonSelector';
import { StatComparisonBar } from '@/components/players/StatComparisonBar';
import { GameLogChart } from '@/components/players/GameLogChart';
import { PropTrendCard } from '@/components/players/PropTrendCard';
import { getPlayerById } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';

const Compare = () => {
  const [searchParams] = useSearchParams();
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  useEffect(() => {
    const p1Id = searchParams.get('p1');
    const p2Id = searchParams.get('p2');
    if (p1Id) setPlayer1(getPlayerById(p1Id) || null);
    if (p2Id) setPlayer2(getPlayerById(p2Id) || null);
  }, [searchParams]);

  const swapPlayers = () => {
    const temp = player1;
    setPlayer1(player2);
    setPlayer2(temp);
  };

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              PLAYER <span className="text-gradient">COMPARISON</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select two players to compare their stats, trends, and betting insights side-by-side.
            </p>
          </div>

          {/* Player Selection */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center mb-12">
            <ComparisonSelector
              selectedPlayer={player1}
              onSelect={setPlayer1}
              excludePlayer={player2}
              label="Select Player 1"
              accentColor="primary"
            />

            <button
              onClick={swapPlayers}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors self-center"
              disabled={!player1 || !player2}
            >
              <ArrowLeftRight className="h-5 w-5 text-muted-foreground" />
            </button>

            <ComparisonSelector
              selectedPlayer={player2}
              onSelect={setPlayer2}
              excludePlayer={player1}
              label="Select Player 2"
              accentColor="accent"
            />
          </div>

          {/* Comparison Content */}
          {player1 && player2 ? (
            <div className="space-y-8 animate-fade-in">
              {/* Player Headers */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                    {player1.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{player1.name}</h2>
                    <p className="text-muted-foreground">{player1.team}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                        {player1.position}
                      </Badge>
                      {player1.bettingInsights.hotStreak && (
                        <Badge className="text-xs bg-primary text-primary-foreground">HOT</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/30">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-bold text-accent">
                    {player2.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{player2.name}</h2>
                    <p className="text-muted-foreground">{player2.team}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                        {player2.position}
                      </Badge>
                      {player2.bettingInsights.hotStreak && (
                        <Badge className="text-xs bg-accent text-accent-foreground">HOT</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Comparison */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-xl font-bold">Season Averages</h3>
                </div>

                <div className="space-y-6">
                  {player1.stats.points !== undefined && player2.stats.points !== undefined && (
                    <StatComparisonBar
                      label="Points Per Game"
                      value1={player1.stats.points}
                      value2={player2.stats.points}
                      player1Name={player1.name}
                      player2Name={player2.name}
                      maxValue={40}
                    />
                  )}
                  {player1.stats.assists !== undefined && player2.stats.assists !== undefined && (
                    <StatComparisonBar
                      label="Assists Per Game"
                      value1={player1.stats.assists}
                      value2={player2.stats.assists}
                      player1Name={player1.name}
                      player2Name={player2.name}
                      maxValue={15}
                    />
                  )}
                  {player1.stats.rebounds !== undefined && player2.stats.rebounds !== undefined && (
                    <StatComparisonBar
                      label="Rebounds Per Game"
                      value1={player1.stats.rebounds}
                      value2={player2.stats.rebounds}
                      player1Name={player1.name}
                      player2Name={player2.name}
                      maxValue={15}
                    />
                  )}
                  <StatComparisonBar
                    label="Efficiency Rating"
                    value1={player1.stats.efficiency}
                    value2={player2.stats.efficiency}
                    player1Name={player1.name}
                    player2Name={player2.name}
                    maxValue={40}
                  />
                  <StatComparisonBar
                    label="Usage Rate"
                    value1={player1.stats.usageRate}
                    value2={player2.stats.usageRate}
                    player1Name={player1.name}
                    player2Name={player2.name}
                    maxValue={40}
                    suffix="%"
                  />
                </div>
              </div>

              {/* Trend Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{player1.name} - Last 5 Games</h3>
                  </div>
                  <GameLogChart
                    games={player1.recentGames}
                    dataKey="points"
                    label="Points"
                    color="hsl(84, 81%, 44%)"
                  />
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">{player2.name} - Last 5 Games</h3>
                  </div>
                  <GameLogChart
                    games={player2.recentGames}
                    dataKey="points"
                    label="Points"
                    color="hsl(174, 72%, 46%)"
                  />
                </div>
              </div>

              {/* Betting Insights Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-bold mb-4 text-primary">{player1.name} Prop Trends</h3>
                  <div className="space-y-3">
                    {player1.bettingInsights.propTrends.map((trend, i) => (
                      <PropTrendCard key={i} trend={trend} />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Consistency Rating</span>
                      <span className="font-bold text-primary">{player1.bettingInsights.consistencyRating}%</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">O/U Record</span>
                      <span className="font-bold">
                        <span className="text-primary">{player1.bettingInsights.overUnderRecord.over}O</span>
                        {' / '}
                        <span className="text-destructive">{player1.bettingInsights.overUnderRecord.under}U</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-bold mb-4 text-accent">{player2.name} Prop Trends</h3>
                  <div className="space-y-3">
                    {player2.bettingInsights.propTrends.map((trend, i) => (
                      <PropTrendCard key={i} trend={trend} />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Consistency Rating</span>
                      <span className="font-bold text-accent">{player2.bettingInsights.consistencyRating}%</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">O/U Record</span>
                      <span className="font-bold">
                        <span className="text-primary">{player2.bettingInsights.overUnderRecord.over}O</span>
                        {' / '}
                        <span className="text-destructive">{player2.bettingInsights.overUnderRecord.under}U</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 rounded-xl border border-dashed border-border bg-card/50">
              <div className="h-16 w-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <ArrowLeftRight className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Select Two Players</h3>
              <p className="text-muted-foreground">
                Choose players from the dropdowns above to see a detailed comparison
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Compare;
