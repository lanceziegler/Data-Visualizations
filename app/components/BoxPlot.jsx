'use client';

import React, { useEffect, useRef } from 'react';
import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';

const BoxPlot = ({ label, labelX, data1, data2, min, max }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const boxplotData = {
    // define label tree
    labels: [labelX],
    datasets: [
      {
        label: 'PGM',
        backgroundColor: '#526875',
        borderColor: 'red',
        borderWidth: 1,
        outlierColor: 'rgba(0, 0, 0, 1)',
        padding: 30,
        itemRadius: 4,
        data: [data1],
        maxBarThickness: 120,
      },
      {
        label: 'GNXS',
        backgroundColor: '#A893F5',
        borderColor: 'blue',
        borderWidth: 1,
        outlierColor: 'rgba(0, 0, 0, 1)',
        padding: 30,
        itemRadius: 4,
        data: [data2],
        maxBarThickness: 120,
      },
    ],
  };

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Destroy existing chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create new chart instance
      chartInstanceRef.current = new BoxPlotChart(ctx, {
        data: boxplotData,
        options: {
          scales: {
            y: {
              ticks: {
                font: {
                  size: 17,
                },
              },
              title: {
                display: true,
                text: label,
                font: {
                  size: 21,
                },
              },
              min: min, // Set the minimum value of the y-axis
              max: max,
            },
            x: {
              // Add x-axis options

              ticks: {
                font: {
                  size: 20,
                },
              },
            },
          },
          plugins: {
            boxplot: {
              median: {
                width: 30, // Adjust the width of the median line
              },
            },
            legend: {
              align: 'center',
              labels: {
                font: {
                  size: 20,
                },
              },
            },
          },
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 89,
                borderColor: 'red',
                borderWidth: 1,
                label: {
                  content: 'Overall AQ20 Mean Read Length for DNA (PGM)',
                  enabled: true,
                },
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 64,
                borderColor: 'red',
                borderWidth: 1,
                label: {
                  content: 'Overall AQ20 Mean Read Length for DNA (GNXS)',
                  enabled: true,
                },
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 5000,
                borderColor: 'red',
                borderWidth: 1,
                label: {
                  content: 'Overall Total Mapped Reads for RNA (PGM)',
                  enabled: true,
                },
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 6000,
                borderColor: 'red',
                borderWidth: 1,
                label: {
                  content: 'Overall Total Mapped Reads for RNA (GNXS)',
                  enabled: true,
                },
              },
            ],
          },
        },
      });
    }

    // Cleanup: Destroy chart instance when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='flex content-center justify-center'>
      <canvas ref={canvasRef} style={{ maxWidth: 600 }} />
    </div>
  );
};

export default BoxPlot;
