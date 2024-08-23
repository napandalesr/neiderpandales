import React, { useState, useEffect } from 'react';

type props = {
  text: string;
  speed: number;
  start: boolean;
}

const TypingEffectStart = ({ text, speed, start }: props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: any;

    if (start && index < text.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [start, index, text, speed, displayedText]);

  useEffect(() => {
    if (!start) {
      setDisplayedText('');
      setIndex(0);
    }
  }, [start]);

  return <div>{displayedText}</div>;
};

export default TypingEffectStart;
