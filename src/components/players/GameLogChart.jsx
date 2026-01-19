import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export const GameLogChart = ({ games, dataKey, label, color = 'hsl(84, 81%, 44%)' }) => {
  const data = [...games].reverse().map((game, index) => ({
    game: `G${index + 1}`,
    value: game[dataKey],
    opponent: game.opponent,
    result: game.result,
    date: game.date,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
          <p className="text-foreground font-semibold">{data.value} {label}</p>
          <p className="text-muted-foreground text-sm">vs {data.opponent}</p>
          <p className={`text-sm font-medium ${data.result === 'W' ? 'text-primary' : 'text-destructive'}`}>
            {data.result === 'W' ? 'Win' : 'Loss'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" />
          <XAxis
            dataKey="game"
            stroke="hsl(215, 20%, 55%)"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="hsl(215, 20%, 55%)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
