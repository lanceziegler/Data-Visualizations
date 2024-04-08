'use client';

import React, { useEffect, useRef } from 'react';
import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';

const BoxPlot = ({ label, data1, data2, min, max }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const boxplotData = {
    // define label tree
    labels: label,
    datasets: [
      {
        label: 'PGM',
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'red',
        borderWidth: 1,
        outlierColor: '#000000',
        padding: 10,
        itemRadius: 4,
        data: [data1],
      },
      {
        label: 'GNXS',
        backgroundColor: 'rgba(0,0,255,0.5)',
        borderColor: 'blue',
        borderWidth: 1,
        outlierColor: 'black',
        padding: 10,
        itemRadius: 4,
        data: [data2],
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
                fontSize: 40, // Change the font size here
              },
              min: min, // Set the minimum value of the y-axis
              max: max,
            },

            x: {
              // Add x-axis options
              ticks: {
                fontSize: 30, // Change the font size of x-axis ticks
              },
            },
          },
          plugins: {
            boxplot: {
              median: {
                width: 2, // Adjust the width of the median line
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
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BoxPlot;
