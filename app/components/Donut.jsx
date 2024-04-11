'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import chart.js
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Donut = ({ data, title }) => {
  const chartRef = useRef(); // Reference to canvas element

  Chart.register(ChartDataLabels);

  useEffect(() => {
    // Data for the chart
    const chartData = {
      labels: ['PGM', 'GNXS'],
      datasets: [
        {
          label: 'Data: ',
          data: data,
          backgroundColor: ['#A893F5', '#526875'],
          hoverOffset: 4, // Spacing when hovering over segments
        },
      ],
    };

    // Configuration for the chart
    const config = {
      type: 'doughnut',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: title || 'KRISSY IS HOT', // Using title prop or a default if not provided
            font: {
              size: 21,
            },
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 22,
              },
            },
          },
          datalabels: {
            font: {
              size: 25,
            },
            color: '#FFF',
          },
        },
        // datalabels: {
        //   //   formatter: (value, context) => {
        //   //     return context.chart.data.labels[context.dataIndex] + ': ' + value;
        //   //   },
        //   font: {
        //     size: 30, // Change the font size of the data labels
        //   },
        // },
        // cutout: '60%', // Adjust the size of the inner circle
        // circumference: Math.PI * 2, // Ensure full circumference for a complete circle
        aspectRatio: 1, // Adjust the aspect ratio to make it a perfect circle
        layout: {
          padding: {
            top: 200,
            bottom: 320,
            left: 320,
            right: 320,
          },
        },
        aspectRatio: 1, // Adjust the aspect ratio to make it a perfect circle
      },
    };

    // Create chart instance
    const myChart = new Chart(chartRef.current, config);

    // Clean up function
    return () => {
      myChart.destroy(); // Destroy chart instance to prevent memory leaks
    };
  }, [data, title]); // Depend on data and title for changes

  return <canvas ref={chartRef} />; // Render canvas element
};

export default Donut;
