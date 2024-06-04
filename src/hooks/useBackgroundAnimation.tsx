"use client"

import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function useBackgroundAnimation(imageWidth : any, duration = 3000) {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTranslateX((prevTranslateX) => prevTranslateX - imageWidth);
    }, duration);

    return () => clearInterval(intervalId);
  }, [imageWidth, duration]);

  const animatedStyle = useSpring({
    from: { transform: `translateX(0px)` },
    to: { transform: `translateX(-${imageWidth}px)` },
    config: { duration },
  });

  return animatedStyle;
}