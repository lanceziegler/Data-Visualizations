'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import chart.js

const BarStacked = () => {
  const chartRef = useRef(); // Reference to canvas element

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: ['PGM', 'GNXS'],
      datasets: [
        {
          label: 'Run 6',
          data: [2479121],
          backgroundColor: ['#662244'],
          borderColor: '#526875',
          borderWidth: 1,
          maxBarThickness: 200,
        },
        {
          label: 'Run 5',
          data: [4646962],
          backgroundColor: ['#888378'],
          borderColor: '#526875',
          borderWidth: 1,
          maxBarThickness: 200,
        },
        {
          label: 'Run 4',
          data: [2770405],
          backgroundColor: ['#16DB16'],
          borderColor: '#526875',
          borderWidth: 1,
          maxBarThickness: 200,
        },
        {
          label: 'Run 3',
          data: [4358318, 36708932],
          backgroundColor: ['#DB9F1D'],
          borderColor: '#526875',
          borderWidth: 1,
          maxBarThickness: 200,
        },
        {
          label: 'Run 2',
          data: [2626100, 23329314],
          backgroundColor: ['#1D60DB'],
          borderColor: '#526875',
          borderWidth: 1,
          maxBarThickness: 200,
        },
        {
          label: 'Run 1',
          data: [3215156, 21103572],
          backgroundColor: ['#DB1D7D'],
          borderColor: '#526875',
          borderWidth: 1,
          maxBarThickness: 200,
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: 'Total Usable Reads',
              font: {
                size: 25,
              },
            },
            ticks: {
              font: {
                size: 16,
              },
            },
          },
          x: {
            stacked: true,
            ticks: {
              font: {
                size: 21,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 36,
              },
            },
            reverse: true,
          },
        },
      },
    };

    // Create chart instance
    const myChart = new Chart(chartRef.current, config);

    // Clean up function
    return () => {
      myChart.destroy(); // Destroy chart instance to prevent memory leaks
    };
  }, []); // Empty dependency array to run this effect only once

  return <canvas ref={chartRef} style={{ maxWidth: 800 }} />; // Render canvas element
};

export default BarStacked;
