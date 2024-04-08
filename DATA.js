export const lineGraphData = {
  // x axis
  labels: [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ],
  datasets: [
    {
      label: 'Cumulative Number of FDA-Approved Targeted Therapies',
      data: [
        0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 7, 12, 12, 15, 18, 19, 23, 27,
        30, 33,
      ],
      borderColor: 'rgb(75,192,192)',
    },
    {
      label: '5 Year Relative Survival (%)',
      data: [
        15.1, 15.1, 15.2, 15.6, 16.4, 17.3, 17.3, 18.1, 18.4, 18.8, 19.3, 20.1,
        20.4, 21.3, 22.7, 24.2,
      ],
      borderColor: 'rgb(75,192,192)',
    },
    {
      label: '3 Year Relative Survival (%)',
      data: [
        20.1, 20.0, 20.4, 20.6, 21.6, 22.5, 22.7, 23.8, 24.1, 24.5, 25.0, 26.0,
        26.1, 27.0, 28.7, 30.7, 32.8, 34.4,
      ],
      borderColor: 'rgb(255,165,0)',
    },
    {
      label: '1 Year Relative Survival (%)',
      data: [
        41.0, 41.0, 40.9, 41.3, 42.0, 43.2, 43.7, 44.3, 44.6, 45.4, 45.4, 46.8,
        46.6, 47.4, 48.2, 50.0, 51.6, 53.1, 54.9, 58.8,
      ],
      borderColor: 'rgb(75,192,192)',
    },
  ],
};

export const boxplotData = {
  labels: ['Category 1', 'Category 2'],
  datasets: [
    {
      label: 'Box Plot',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      outlierColor: '#999999',
      padding: 10,
      itemRadius: 0,
      data: [
        {
          min: 10,
          q1: 20,
          median: 25,
          q3: 30,
          max: 40,
          outliers: [5, 45],
        },
        {
          min: 15,
          q1: 25,
          median: 30,
          q3: 35,
          max: 50,
          outliers: [10, 55],
        },
      ],
    },
  ],
};
