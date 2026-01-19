import React from 'react';
import { Link } from 'react-router-dom';

export const PlayerCard = ({ player }) => {
  if (!player) return null;
  return (
    <Link to={`/player/${player.id}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
          {player.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-foreground">{player.name}</div>
          <div className="text-sm text-muted-foreground">{player.team} • {player.position}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-sm text-muted-foreground">PPG</div>
          <div className="font-bold text-foreground">{player.stats?.points ?? '-'}</div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
