import { ChartConfiguration } from "chart.js";
import { data2 as data } from "./data2";

export const config: ChartConfiguration<'boxplot'> = {
    type: 'boxplot',
    data,
  };