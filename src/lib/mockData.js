export const mockPlayers = [
  {
    id: '1',
    name: 'Marcus Thompson',
    team: 'Los Angeles Stars',
    position: 'Point Guard',
    sport: 'NBA',
    imageUrl: '/placeholder.svg',
    stats: {
      points: 28.5,
      assists: 8.2,
      rebounds: 4.8,
      efficiency: 31.2,
      usageRate: 32.1,
      minutesPerGame: 36.4,
    },
    recentGames: [
      { date: '2024-12-18', opponent: 'Chicago Bulls', points: 32, assists: 9, rebounds: 5, result: 'W' },
      { date: '2024-12-16', opponent: 'Miami Heat', points: 25, assists: 11, rebounds: 4, result: 'W' },
      { date: '2024-12-14', opponent: 'Boston Celtics', points: 28, assists: 7, rebounds: 6, result: 'L' },
      { date: '2024-12-12', opponent: 'Denver Nuggets', points: 35, assists: 8, rebounds: 3, result: 'W' },
      { date: '2024-12-10', opponent: 'Phoenix Suns', points: 22, assists: 10, rebounds: 5, result: 'L' },
    ],
    bettingInsights: {
      consistencyRating: 87,
      boomBustIndicator: 'Boom',
      propTrends: [
        { prop: 'Points', line: 26.5, hitRate: 72, trend: 'up' },
        { prop: 'Assists', line: 7.5, hitRate: 80, trend: 'stable' },
        { prop: 'Pts+Reb+Ast', line: 38.5, hitRate: 68, trend: 'up' },
      ],
      overUnderRecord: { over: 8, under: 2 },
      hotStreak: true,
    },
  },
  {
    id: '2',
    name: 'Devon Williams',
    team: 'New York Knights',
    position: 'Shooting Guard',
    sport: 'NBA',
    imageUrl: '/placeholder.svg',
    stats: {
      points: 24.1,
      assists: 5.6,
      rebounds: 6.2,
      efficiency: 26.8,
      usageRate: 28.4,
      minutesPerGame: 34.2,
    },
    recentGames: [
      { date: '2024-12-18', opponent: 'Atlanta Hawks', points: 28, assists: 4, rebounds: 7, result: 'W' },
      { date: '2024-12-16', opponent: 'Orlando Magic', points: 19, assists: 6, rebounds: 5, result: 'L' },
      { date: '2024-12-14', opponent: 'Cleveland Cavs', points: 31, assists: 5, rebounds: 8, result: 'W' },
      { date: '2024-12-12', opponent: 'Detroit Pistons', points: 22, assists: 7, rebounds: 4, result: 'W' },
      { date: '2024-12-10', opponent: 'Indiana Pacers', points: 26, assists: 4, rebounds: 6, result: 'L' },
    ],
    bettingInsights: {
      consistencyRating: 72,
      boomBustIndicator: 'Steady',
      propTrends: [
        { prop: 'Points', line: 23.5, hitRate: 58, trend: 'down' },
        { prop: 'Rebounds', line: 5.5, hitRate: 75, trend: 'up' },
        { prop: 'Pts+Reb', line: 29.5, hitRate: 62, trend: 'stable' },
      ],
      overUnderRecord: { over: 5, under: 5 },
      hotStreak: false,
    },
  },
  {
    id: '3',
    name: 'Jaylen Carter',
    team: 'Chicago Legends',
    position: 'Small Forward',
    sport: 'NBA',
    imageUrl: '/placeholder.svg',
    stats: {
      points: 22.8,
      assists: 3.4,
      rebounds: 7.9,
      efficiency: 24.1,
      usageRate: 25.6,
      minutesPerGame: 33.8,
    },
    recentGames: [
      { date: '2024-12-18', opponent: 'Milwaukee Bucks', points: 18, assists: 2, rebounds: 9, result: 'L' },
      { date: '2024-12-16', opponent: 'Toronto Raptors', points: 26, assists: 4, rebounds: 11, result: 'W' },
      { date: '2024-12-14', opponent: 'Philadelphia 76ers', points: 24, assists: 3, rebounds: 6, result: 'W' },
      { date: '2024-12-12', opponent: 'Brooklyn Nets', points: 20, assists: 5, rebounds: 8, result: 'L' },
      { date: '2024-12-10', opponent: 'Charlotte Hornets', points: 29, assists: 2, rebounds: 7, result: 'W' },
    ],
    bettingInsights: {
      consistencyRating: 65,
      boomBustIndicator: 'Bust',
      propTrends: [
        { prop: 'Points', line: 22.5, hitRate: 48, trend: 'down' },
        { prop: 'Rebounds', line: 7.5, hitRate: 82, trend: 'up' },
        { prop: 'Pts+Reb', line: 29.5, hitRate: 55, trend: 'stable' },
      ],
      overUnderRecord: { over: 4, under: 6 },
      hotStreak: false,
    },
  },
  {
    id: '4',
    name: 'Brandon Mitchell',
    team: 'Houston Rockets',
    position: 'Power Forward',
    sport: 'NBA',
    imageUrl: '/placeholder.svg',
    stats: {
      points: 19.4,
      assists: 2.8,
      rebounds: 9.6,
      efficiency: 22.5,
      usageRate: 22.1,
      minutesPerGame: 32.1,
    },
    recentGames: [
      { date: '2024-12-18', opponent: 'San Antonio Spurs', points: 21, assists: 3, rebounds: 12, result: 'W' },
      { date: '2024-12-16', opponent: 'Dallas Mavs', points: 18, assists: 2, rebounds: 10, result: 'L' },
      { date: '2024-12-14', opponent: 'Oklahoma City', points: 24, assists: 4, rebounds: 8, result: 'W' },
      { date: '2024-12-12', opponent: 'Memphis Grizzlies', points: 16, assists: 2, rebounds: 11, result: 'W' },
      { date: '2024-12-10', opponent: 'New Orleans', points: 19, assists: 3, rebounds: 9, result: 'L' },
    ],
    bettingInsights: {
      consistencyRating: 78,
      boomBustIndicator: 'Steady',
      propTrends: [
        { prop: 'Points', line: 18.5, hitRate: 65, trend: 'stable' },
        { prop: 'Rebounds', line: 9.5, hitRate: 70, trend: 'up' },
        { prop: 'Pts+Reb', line: 27.5, hitRate: 72, trend: 'up' },
      ],
      overUnderRecord: { over: 6, under: 4 },
      hotStreak: true,
    },
  },
];

export const featuredComparisons = [
  { player1Id: '1', player2Id: '2', title: 'Elite Guard Showdown' },
  { player1Id: '3', player2Id: '4', title: 'Forwards Battle' },
  { player1Id: '1', player2Id: '3', title: 'Scoring Leaders' },
];

export const getPlayerById = (id) => {
  return mockPlayers.find(player => player.id === id);
};
