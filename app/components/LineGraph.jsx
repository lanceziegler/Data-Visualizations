'use client';

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
  const options = {};

  return <Line options={options} data={lineGraphData} />;
}

export default LineGraph;
