import React from 'react';

export const PropTrendCard = ({ trend }) => {
  if (!trend) return null;
  return (
    <div className="p-3 rounded-lg border border-border bg-card flex items-center justify-between">
      <div>
        <div className="text-sm text-muted-foreground">{trend.prop}</div>
        <div className="font-semibold">Line: {trend.line}</div>
      </div>
      <div className="text-right">
        <div className="text-sm text-muted-foreground">Hit Rate</div>
        <div className="font-bold">{trend.hitRate}%</div>
      </div>
    </div>
  );
};

export default PropTrendCard;
