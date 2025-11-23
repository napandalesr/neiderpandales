import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const MinimizeIconCircle: React.FC<Props> = ({ size = 24, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="7" y="11.25" width="10" height="1.5" rx="0.75" fill="white" />
    </svg>
  );
};

export default MinimizeIconCircle;
