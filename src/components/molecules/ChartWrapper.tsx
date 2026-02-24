// src/components/molecules/ChartWrapper.tsx
import React, { useRef, useEffect } from "react";
import {
    AgCharts,
    ModuleRegistry, 
    CartesianChartModule, 
    PieSeriesModule,
    BarSeriesModule, 
    LineSeriesModule, 
    PolarChartModule,
    NumberAxisModule,
    CategoryAxisModule,
    LegendModule,
 } from "ag-charts-community";

// Types only
import type { 
  AgChartOptions, 
  AgCartesianChartOptions, 
  AgPolarChartOptions, 
  AgCartesianSeriesOptions, 
  AgPolarSeriesOptions 
} from "ag-charts-community";

// Register modules
ModuleRegistry.registerModules([
  CartesianChartModule,   // required for Cartesian charts (bar, line, area)
  PolarChartModule,       // required for polar charts (pie)
  PieSeriesModule,        // required for pie series
  BarSeriesModule,        // required for bar series
  LineSeriesModule,       // required for line series
  NumberAxisModule,
  CategoryAxisModule,
  LegendModule,
]);

interface ChartWrapperProps {
  type: "bar" | "line" | "pie";
  data: any[];
  options?: Partial<AgChartOptions>;
  className?: string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ type, data, options, className }) => {
  const chartRef = useRef<ReturnType<typeof AgCharts.create> | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Default chart options
    let defaultOptions: AgCartesianChartOptions | AgPolarChartOptions;

switch (type) {
  case "bar":
    defaultOptions = {
      container: containerRef.current!,
      data,
      series: [
        {
          type: "bar",
          xKey: "x",
          yKey: "y",
          yName: "Value",
        } as unknown as AgCartesianSeriesOptions,
      ],
      title: { text: options?.title?.text || "" },
      ...options,
    } as AgCartesianChartOptions;
    break;

  case "line":
    defaultOptions = {
      container: containerRef.current!,
      data,
      series: [
        {
          type: "line",
          xKey: "x",
          yKey: "y",
          yName: "Value",
        } as unknown as AgCartesianSeriesOptions,
      ],
      title: { text: options?.title?.text || "" },
      ...options,
    } as AgCartesianChartOptions;
    break;

  case "pie":
    defaultOptions = {
      container: containerRef.current!,
      data,
      series: [
        {
          type: "pie",
          angleKey: "y",
          calloutLabelKey: "x",
        } as AgPolarSeriesOptions,
      ],
      title: { text: options?.title?.text || "" },
      ...options,
    } as AgPolarChartOptions;
    break;

  default:
    throw new Error(`Unsupported chart type: ${type}`);
}

    chartRef.current = AgCharts.create(defaultOptions);

    return () => {
      chartRef.current?.destroy();
    };
  }, [type, data, options]);

  return <div ref={containerRef} className={className} style={{ width: "100%", height: "400px" }} />;
};

export default ChartWrapper;
