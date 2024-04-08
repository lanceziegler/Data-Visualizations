'use client';

import { IconChartLine } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LineGraph from './components/LineGraph';
import Placeholder from './components/placeholder';

export default function Home() {
  const [visibleComponents, setVisibleComponents] = useState({
    placeholder: true,
    lineGraph: false,
    component2: false,
    component3: false,
    component4: false,
    component5: false,
  });
  const [pressedButton, setPressedButton] = useState(null); // State to track which button is pressed
  const [pageLoaded, setPageLoaded] = useState(false); // State to track if the page is loaded

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
    setVisibleComponents((prevState) => ({
      ...prevState,
      [component]: !prevState[component],
    }));
  };

  const allComponentsFalse = () => {
    return (
      !visibleComponents.lineGraph &&
      !visibleComponents.component2 &&
      !visibleComponents.component3 &&
      !visibleComponents.component4 &&
      !visibleComponents.component5
    );
  };

  return (
    <main
      className={`flex items-center justify-center min-h-screen transition-opacity duration-1000 ${
        pageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-12 w-full ${
          allComponentsFalse() ? 'text-black' : 'text-black'
        }`}
      >
        <section
          className={`md:col-span-2 flex flex-col gap-10 items-start m-auto justify-center ${
            allComponentsFalse() && 'md:col-span-6'
          }`}
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
            <IconChartLine /> Show Line Graph{' '}
          </button>
          <button
            onClick={() => toggleVisibility('component2')}
            onMouseDown={() => handlePress('component2')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('component2')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'component2'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            Show [Next Visualization]
          </button>
          <button
            onClick={() => toggleVisibility('component3')}
            onMouseDown={() => handlePress('component3')} // Handle mouse down event
            onMouseUp={handleRelease} // Handle mouse up event
            onMouseLeave={handleRelease} // Handle mouse leave event
            onTouchStart={() => handlePress('component3')} // Handle touch start event
            onTouchEnd={handleRelease} // Handle touch end event
            className={`transform transition-all hover:scale-105 hover:text-red-700 ${
              pressedButton === 'component3'
                ? 'scale-95 text-red-600'
                : 'scale-100'
            }`}
          >
            Show [Next Visualization]
          </button>
        </section>

        <section
          className={`md:col-span-10 p-20 ${
            allComponentsFalse() && 'md:col-span-6'
          }`}
        >
          {/* Render components based on visibility state */}
          <div
            className={`transition-opacity duration-1000 ease-in ${
              allComponentsFalse() ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {allComponentsFalse() && <Placeholder />}
          </div>
          <div
            className={`${
              visibleComponents.lineGraph ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className='text-3xl'>Number of Therapies vs Survival Rates</h1>
            {visibleComponents.lineGraph && <LineGraph />}
          </div>
        </section>
      </div>
    </main>
  );
}
