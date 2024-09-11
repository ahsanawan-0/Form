import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

const MyLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PacmanLoader
        color="#36d7b7" // Customize the color
        size={60} // Customize the size
        cssOverride={{ display: 'block' }} // Apply default display block style
      />
    </div>
  );
};

export default MyLoader;
