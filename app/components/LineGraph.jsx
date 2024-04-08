import React from 'react';
import { Line } from 'react-chartjs-2';
import { lineGraphData } from '@/DATA';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  const options = {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return value + '%';
          },
        },
      },
    },
  };

  const data = {
    labels: lineGraphData.labels,
    datasets: [
      {
        label: 'Cumulative Number of FDA-Approved Targeted Therapies',
        data: lineGraphData.datasets[0].data,
        borderColor: 'rgb(0,0,0)',
        yAxisID: 'y',
      },
      {
        label: '5 Year Relative Survival (%)',
        data: lineGraphData.datasets[1].data,
        borderColor: 'rgb(255, 99, 132)',
        yAxisID: 'y1',
      },
      {
        label: '3 Year Relative Survival (%)',
        data: lineGraphData.datasets[2].data,
        borderColor: 'rgb(255, 165, 0)',
        yAxisID: 'y1',
      },
      {
        label: '1 Year Relative Survival (%)',
        data: lineGraphData.datasets[3].data,
        borderColor: 'rgb(50,205,50)',
        yAxisID: 'y1',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default LineGraph;
