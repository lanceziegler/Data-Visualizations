'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import chart.js

const BarGraph = () => {
  const chartRef = useRef(); // Reference to canvas element

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sample Data',
          data: [12, 19, 3, 5, 2], // Sample data values
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Bar color
          borderColor: 'rgba(255, 99, 132, 1)', // Border color
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
