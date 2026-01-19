# StatEdge - Sports Betting Analytics

A modern, interactive sports betting analytics platform built with React and Vite. StatEdge provides comprehensive player statistics, prop betting trends, and game log analysis to help you make informed betting decisions.

## Features

- **Player Profiles**: Detailed player statistics and historical performance data
- **Game Logs**: Visualize player performance trends with interactive charts
- **Prop Trends**: Track player prop betting lines and trends
- **Comparisons**: Compare multiple players side-by-side with stat comparison tools
- **Insights**: Analytics and strategic insights for better betting decisions
- **Responsive Design**: Mobile-friendly interface that works on all devices

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **React Query** - Data fetching and caching
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd statedge-main
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── players/        # Player-related components
│   ├── comparison/     # Comparison tools
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── Index.jsx       # Home page
│   ├── PlayerProfile.jsx
│   ├── Compare.jsx     # Player comparison
│   ├── Insights.jsx    # Analytics insights
│   ├── About.jsx       # About page
│   └── NotFound.jsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utilities and mock data
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

### Deploy to Other Platforms

The `npm run build` command generates a `dist` folder that can be deployed to any static hosting service (Netlify, GitHub Pages, etc.).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

