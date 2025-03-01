import React, { useState, useEffect } from 'react';

const GradientProgressBar = ({ height = '1rem', gradientColors = ['#E0EAFc', '#CFDEF3'] }) => {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    let intervalId;

    const startAnimation = () => {
      intervalId = setInterval(() => {
        // Generate a random progress value in steps of 10 (0, 30, 70, 80, 100)
        const randomProgress = Math.floor(Math.random() * 11) * 10; 
        setProgress(randomProgress);
      }, 100); // Adjust interval for slower, more visible changes
    };

    const stopAnimation = () => {
      clearInterval(intervalId);
    };

    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  const progressPercentage = Math.min(100, Math.max(0, progress));
  const gradient = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;

  const barStyle = {
    height: height,
    width: `${progressPercentage}%`,
    background: gradient,
    borderRadius: '1rem',
    transition: 'width 0.5s ease-in-out'
  };

  return (
    <div className="rounded-lg overflow-hidden relative" style={{ height }}>
      <div style={barStyle}></div>
    </div>
  );
};

export default GradientProgressBar;