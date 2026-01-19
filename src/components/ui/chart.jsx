import * as React from "react";
import { ResponsiveContainer, Tooltip as RechartsTooltip, Legend as RechartsLegend } from "recharts";

import { cn } from "@/lib/utils";

const ChartContext = React.createContext({});
export const useChart = () => React.useContext(ChartContext);

export const ChartContainer = React.forwardRef(({ id, className, children, config = {}, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

export const ChartStyle = ({ id, config = {} }) => {
  // Simple placeholder: if no config, render nothing.
  if (!config || Object.keys(config).length === 0) return null;

  const css = Object.entries(config)
    .map(([key, value]) => `--color-${key}: ${value.color || value};`)
    .join(" ");

  return <style dangerouslySetInnerHTML={{ __html: `[data-chart=${id}]{ ${css} }` }} />;
};

export const ChartTooltip = RechartsTooltip;

export const ChartTooltipContent = React.forwardRef(({ active, payload = [], className }, ref) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div ref={ref} className={cn("rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className)}>
      {payload.map((item, i) => (
        <div key={i} className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded" style={{ background: item.color || item.payload?.fill }} />
            <div className="text-sm">{item.name || item.dataKey}</div>
          </div>
          <div className="font-mono font-medium tabular-nums">{item.value?.toLocaleString?.() ?? item.value}</div>
        </div>
      ))}
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltip";

export const ChartLegend = RechartsLegend;

export const ChartLegendContent = React.forwardRef(({ className, payload = [] }, ref) => {
  if (!payload || payload.length === 0) return null;

  return (
    <div ref={ref} className={cn("flex items-center gap-4", className)}>
      {payload.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="h-2 w-2 shrink-0 rounded" style={{ background: item.color || item.payload?.fill }} />
          <div className="text-sm">{item.name || item.dataKey}</div>
        </div>
      ))}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";




