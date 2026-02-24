// src/components/molecules/ChartWrapper.tsx
import React, { useRef, useEffect } from "react";
import {
  AgCharts,
  ModuleRegistry,
  CartesianChartModule,
  PolarChartModule,
  BarSeriesModule,
  LineSeriesModule,
  PieSeriesModule,
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
  AgPolarSeriesOptions,
} from "ag-charts-community";

// ✅ Register modules once
ModuleRegistry.registerModules([
  CartesianChartModule,
  PolarChartModule,
  BarSeriesModule,
  LineSeriesModule,
  PieSeriesModule,
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

const ChartWrapper: React.FC<ChartWrapperProps> = ({
  type,
  data,
  options,
  className,
}) => {
  const chartRef = useRef<ReturnType<typeof AgCharts.create> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing chart
    chartRef.current?.destroy();

    // Default options
    const defaultOptions: AgCartesianChartOptions | AgPolarChartOptions = {
      container: containerRef.current,
      data,
      series: [],
      title: { text: options?.title?.text || "" },
      ...options,
    };

    // Configure series based on type
    switch (type) {
      case "bar":
        (defaultOptions as AgCartesianChartOptions).series = [
          {
            type: "bar",
            xKey: "x",
            yKey: "y",
            yName: "Value",
          } as unknown as AgCartesianSeriesOptions,
        ];
        break;

      case "line":
        (defaultOptions as AgCartesianChartOptions).series = [
          {
            type: "line",
            xKey: "x",
            yKey: "y",
            yName: "Value",
          } as unknown as AgCartesianSeriesOptions,
        ];
        break;

      case "pie":
        (defaultOptions as AgPolarChartOptions).series = [
          {
            type: "pie",
            angleKey: "y",
            calloutLabelKey: "x",
          } as unknown as AgPolarSeriesOptions,
        ];
        break;

      default:
        break;
    }

    // Create chart
    chartRef.current = AgCharts.create(defaultOptions);

    return () => chartRef.current?.destroy();
  }, [type, data, options]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default ChartWrapper;
