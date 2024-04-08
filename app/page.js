'use client';

import {
  IconChartLine,
  IconChartCandle,
  IconChartBar,
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LineGraph from './components/LineGraph';
import Boxplot from './components/BoxPlot';
import Placeholder from './components/Placeholder';
import { boxplotData } from '../DATA';
import BarGraph from './components/BarGraph';

export default function Home() {
  const [visibleComponent, setVisibleComponent] = useState('placeholder'); // State to track the visible component
  const [pressedButton, setPressedButton] = useState(null); // State to track which button is pressed
  const [pageLoaded, setPageLoaded] = useState(false); // State to track if the page is loaded

  const label = [
    ['Overall DNA Gene Coverage'],
    ['Overall AQ20 Mean Read Length for DNA'],
    ['Overall Total Mapped Reads for RNA'],
    ['KRAS Gene Coverage'],
    ['BRAF Gene Coverage'],
    ['EGFR insertion Gene Coverage'],
    ['EGFR Deletion Gene Coverage'],
    ['ERBB2 Gene Coverage'],
    ['260/280 for DNA'],
    ['260/280 for RNA'],
  ];

  const data1 = [
    [
      1966, 1368, 1969, 1055, 1906, 1354, 1933, 1230, 1766, 895, 1484, 748,
      1929, 1129, 1796, 1004, 1993, 1991, 1990, 1696,
    ],
    [
      98, 94, 99, 94, 98, 94, 98, 94, 101, 97, 101, 96, 99, 95, 99, 95, 98, 94,
      98, 94, 99, 94, 98, 94,
    ],
    [
      7067, 7939, 20029, 19263, 30493, 34957, 17140, 18379, 8683, 11850, 24150,
      19481, 26286, 25741, 12482, 17566, 21625, 26972, 30459, 34817, 50515,
      45335, 23713, 2031,
    ],
    [1966, 1368, 1969, 1055],
    [1906, 1354, 1933, 1230],
    [1766, 895, 1484, 748],
    [1929, 1129, 1796, 1004],
    [1993, 1991, 1990, 1696],
    [1.18, 1.23, 1.17, 1.39, 1.14, 1.65],
    [0.96, 1.02, 1.11, 1.17, 0.97, 1.51],
  ];

  const data2 = [
    [
      4224, 3811, 5999, 6717, 2136, 2228, 2675, 2781, 3477, 2805, 5101, 3674,
      3221, 7957, 4677, 4240, 2707, 2323, 3279, 2209,
    ],
    [
      93, 92, 93, 91, 92, 90, 93, 90, 94, 95, 94, 94, 90, 89, 92, 91, 94, 92,
      94, 94, 93, 91, 91, 89,
    ],
    [
      46522, 56722, 69017, 70174, 101312, 86693, 102446, 126783, 56732, 56506,
      53261, 58085, 98539, 95338, 114890, 81616, 45275, 47579, 43923, 46775,
      88261, 81835, 67651, 88613,
    ],
    [4224, 3811, 5999, 6717],
    [2136, 2228, 2675, 2781],
    [3477, 2805, 5101, 3674],
    [3221, 7957, 4677, 4240],
    [2707, 2323, 3279, 2209],
    [1.23, 1.17, 1.26, 1.09, 1.19, 1.16],
    [1.18, 1.23, 1.17, 1.39, 1.14, 1.65],
  ];

  useEffect(() => {
    // When the component mounts, set a timeout to mark the page as loaded after 1 second
    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  // Function to handle button press
  const handlePress = (button) => {
    setPressedButton(button);
  };

  // Function to handle button release
  const handleRelease = () => {
    setPressedButton(null);
  };

  // Function to toggle visibility of a component
  const toggleVisibility = (component) => {
    setVisibleComponent(
      component === visibleComponent ? 'placeholder' : component
    );
  };

  return (
    <main
      className={`flex items-center justify-center min-h-screen transition-opacity duration-1000 ${
        pageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-12 w-full text-black`}>
        <section
          className={`md:col-span-3 flex flex-col gap-3 items-start justify-center col-span-6 pl-5`}
        >
          {/* Buttons to toggle component visibility */}
          <button
            onClick={() => toggleVisibility('lineGraph')}
            onMouseDown={() => handlePress('lineGraph')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('lineGraph')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'lineGraph'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartLine /> Targeted Therapies &amp; Survival Rates{' '}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot')}
            onMouseDown={() => handlePress('boxPlot')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[0]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot2')}
            onMouseDown={() => handlePress('boxPlot2')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot2')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot2'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[1]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot3')}
            onMouseDown={() => handlePress('boxPlot3')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot3')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot3'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[2]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot4')}
            onMouseDown={() => handlePress('boxPlot4')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot4')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot4'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[3]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot5')}
            onMouseDown={() => handlePress('boxPlot5')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot5')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot5'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[4]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot6')}
            onMouseDown={() => handlePress('boxPlot6')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot6')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot6'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[5]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot7')}
            onMouseDown={() => handlePress('boxPlot7')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot7')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot7'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[6]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot8')}
            onMouseDown={() => handlePress('boxPlot8')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot8')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot8'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[7]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot9')}
            onMouseDown={() => handlePress('boxPlot9')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot9')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot9'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[8]}
          </button>
          <button
            onClick={() => toggleVisibility('boxPlot10')}
            onMouseDown={() => handlePress('boxPlot10')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('boxPlot10')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'boxPlot10'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartCandle /> {label[9]}
          </button>
          <button
            onClick={() => toggleVisibility('barGraph')}
            onMouseDown={() => handlePress('barGraph')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('barGraph')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`flex gap-4 transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'barGraph'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            <IconChartBar /> Bar Chart
          </button>
        </section>

        <section className={`md:col-span-9 p-20 col-span-6`}>
          {/* Render components based on visibility state */}
          {visibleComponent === 'placeholder' && <Placeholder />}
          {visibleComponent === 'lineGraph' && <LineGraph />}
          {visibleComponent === 'barGraph' && <BarGraph />}
          {visibleComponent === 'boxPlot' && (
            <Boxplot
              label={label[0]}
              data1={data1[0]}
              data2={data2[0]}
              min={0}
              max={8000}
            />
          )}
          {visibleComponent === 'boxPlot2' && (
            <Boxplot
              label={label[1]}
              data1={data1[1]}
              data2={data2[1]}
              min={85}
              max={105}
            />
          )}
          {visibleComponent === 'boxPlot3' && (
            <Boxplot
              label={label[2]}
              data1={data1[2]}
              data2={data2[2]}
              min={0}
              max={140000}
            />
          )}
          {visibleComponent === 'boxPlot4' && (
            <Boxplot label={label[3]} data1={data1[3]} data2={data2[3]} />
          )}
          {visibleComponent === 'boxPlot5' && (
            <Boxplot
              label={label[4]}
              data1={data1[4]}
              data2={data2[4]}
              min={1000}
              max={3000}
            />
          )}
          {visibleComponent === 'boxPlot6' && (
            <Boxplot label={label[5]} data1={data1[5]} data2={data2[5]} />
          )}
          {visibleComponent === 'boxPlot7' && (
            <Boxplot label={label[6]} data1={data1[6]} data2={data2[6]} />
          )}
          {visibleComponent === 'boxPlot8' && (
            <Boxplot
              label={label[7]}
              data1={data1[7]}
              data2={data2[7]}
              min={1600}
            />
          )}
          {visibleComponent === 'boxPlot9' && (
            <Boxplot
              label={label[8]}
              data1={data1[8]}
              data2={data2[8]}
              min={1}
            />
          )}
          {visibleComponent === 'boxPlot10' && (
            <Boxplot
              label={label[9]}
              data1={data1[9]}
              data2={data2[9]}
              min={0.9}
            />
          )}
        </section>
      </div>
    </main>
  );
}
