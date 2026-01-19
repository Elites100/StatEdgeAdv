import React from 'react';

export const StatComparisonBar = ({ label, value1, value2, player1Name, player2Name, maxValue = 100, suffix = '' }) => {
  const pct1 = Math.min(100, Math.round((value1 / maxValue) * 100));
  const pct2 = Math.min(100, Math.round((value2 / maxValue) * 100));
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="text-sm text-muted-foreground">{value1}{suffix} / {value2}{suffix}</div>
      </div>
      <div className="w-full bg-border rounded-full h-3 overflow-hidden flex">
        <div className="bg-primary h-3" style={{ width: `${pct1}%` }} />
        <div className="bg-accent h-3" style={{ width: `${pct2}%` }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <div>{player1Name}</div>
        <div>{player2Name}</div>
      </div>
    </div>
  );
};

export default StatComparisonBar;
