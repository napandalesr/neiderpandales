import Image from 'next/image';
import React from 'react';

type props = {
  full: number
}

const Stars = ({ full }: props) => {
  const starsFull = [];
  const starsEmpty = [];
  const sizeStar = 'h-4 w-4';

  for (let i = 1; i <= full; i++) {
    starsFull.push(<Image className={sizeStar} src={'/icons/start-full.png'} alt='start-full' width={32} height={32}/>);
  }

  for (let i = 1; i <= 5-full; i++) {
    starsEmpty.push(<Image className={sizeStar} src={'/icons/star.png'} alt='start-full' width={32} height={32}/>);
  }

  return <>{starsFull}{starsEmpty}</>;
}

export default Stars;