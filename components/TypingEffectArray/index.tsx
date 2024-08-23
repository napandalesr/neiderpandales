import React, { useState, useEffect } from 'react';

type props = {
  texts: string[];
  speed: number;
  start?: boolean;
}

const TypingEffect = ({ texts, speed, start = true }: props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    if (start && !isPaused) {
      
      
      if (charIndex < texts[textIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText + texts[textIndex].charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        
        setIsPaused(true);
        setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
          setIsPaused(false);
        }, 2000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [start, charIndex, textIndex, texts, speed, displayedText, isPaused]);

  useEffect(() => {
    if (!start) {
      setDisplayedText('');
      setCharIndex(0);
      setTextIndex(0);
      setIsPaused(false);
    }
  }, [start]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
