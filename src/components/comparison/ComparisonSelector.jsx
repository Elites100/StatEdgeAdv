import React from 'react';
import { mockPlayers } from '@/lib/mockData';

export const ComparisonSelector = ({ selectedPlayer, onSelect, excludePlayer, label = 'Select Player' }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-muted-foreground mb-2">{label}</label>
      <select
        value={selectedPlayer?.id ?? ''}
        onChange={(e) => {
          const id = e.target.value;
          const player = mockPlayers.find(p => p.id === id) || null;
          onSelect(player);
        }}
        className="w-full p-3 rounded-lg border border-border bg-card"
      >
        <option value="">Choose player</option>
        {mockPlayers.filter(p => !excludePlayer || p.id !== excludePlayer.id).map(p => (
          <option key={p.id} value={p.id}>{p.name} — {p.position}</option>
        ))}
      </select>
    </div>
  );
};

export default ComparisonSelector;
