import { ChartConfiguration } from "chart.js";

function randomValues(count: number, min: number, max: number, extra: number[] = []): number[] {
    const delta = max - min;
    return [...Array.from({ length: count }).map(() => Math.random() * delta + min), ...extra];
  }
  
  export const data2: ChartConfiguration<'boxplot'>['data'] = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          randomValues(100, 0, 100),
          randomValues(100, 0, 20, [110]),
          randomValues(100, 20, 70),
          // empty data
          [],
        ],
      },
      {
        label: 'Dataset 2',
        data: [
          randomValues(100, 60, 100, [5, 10]),
          randomValues(100, 0, 100),
          randomValues(100, 0, 20),
          randomValues(100, 20, 40),
        ],
      },
    ],
  };