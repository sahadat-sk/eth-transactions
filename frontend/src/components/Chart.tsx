'use client';
import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const ChartComponent = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = '#2B2B43',
      lineColor = 'rgba(32, 226, 47, 1)',
      textColor = '#D9D9D9',
      areaTopColor = 'rgba(32, 226, 47, 0.56)',
      areaBottomColor = 'rgba(32, 226, 47, 0.04)',
    } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ref is', chartContainerRef.current?.clientWidth);
    if (chartContainerRef.current === null) return;

    const handleResize = () => {
      if (chartContainerRef.current === null) return;
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      grid: {
        vertLines: {
          color: '#2B2B43',
        },
        horzLines: {
          color: '#363C4E',
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div className="w-full" ref={chartContainerRef} />;
};

export function Chart(props: any) {
  return <ChartComponent {...props} data={props.initialData}></ChartComponent>;
}
