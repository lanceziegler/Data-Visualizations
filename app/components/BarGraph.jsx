'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import chart.js

const BarGraph = ({ labels, dataManual, dataPure, title }) => {
  const chartRef = useRef(); // Reference to canvas element

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Manual Extractions',
          data: dataManual, // Sample data values
          backgroundColor: '#526875', // Bar color
          borderColor: '#526875', // Border color
          borderWidth: 1,
        },
        {
          label: 'Purification System',
          data: dataPure, // Sample data values
          backgroundColor: '#A893F5', // Bar color
          borderColor: '#A893F5', // Border color
          borderWidth: 1,
        },
      ],
    };

    // Configuration for the chart
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true, // Start Y axis at 0
            title: {
              display: true,
              text: title,
              font: {
                size: 21,
              },
            },
          },
          x: {
            ticks: {
              font: {
                size: 16,
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16, // Set legend font size
              },
            },
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

  return <canvas ref={chartRef} width={400} height={200} />; // Render canvas element
};

export default BarGraph;
