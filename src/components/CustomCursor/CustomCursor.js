import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => {
  if (!isVisible) {
    setIsVisible(true);
  }
};

    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay in milliseconds before the cursor appears

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="fixed z-50 w-6 h-6 border-2 border-white rounded-full pointer-events-none transition-opacity"
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className="fixed z-50 w-2 h-2 bg-white rounded-full"
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
