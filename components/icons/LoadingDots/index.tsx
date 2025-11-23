import React from 'react';

const LoadingDots: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#4b5563' }) => {
  const radius = size / 8;
  const positions = [size * 0.2, size * 0.5, size * 0.8];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size / 2}`} xmlns="http://www.w3.org/2000/svg">
      {positions.map((x, i) => (
        <circle key={i} cx={x} cy={size / 4} r={radius} fill={color}>
          <animate
            attributeName="cy"
            values={`${size / 4};${size / 4 - 8};${size / 4}`}
            dur="0.9s"
            repeatCount="indefinite"
            begin={`${i * 0.2}s`}
          />
        </circle>
      ))}
    </svg>
  );
};

export default LoadingDots;
