'use client';

import React, { useState, useEffect } from 'react';

type props = {
  text: string;
  speed: number;
}

const TypingEffect = ({ text, speed }: props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed, displayedText]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;