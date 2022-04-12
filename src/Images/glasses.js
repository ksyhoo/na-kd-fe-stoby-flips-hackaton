import React from 'react';

function Glasses({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 504 504" xmlns="http://www.w3.org/2000/svg">
      {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 504 504"
      version="1.1"
      viewBox="0 0 504 504"
      xmlSpace="preserve"
    > */}
      <ellipse cx="124" cy="252" fill="#00233F" rx="98.4" ry="97.6"></ellipse>
      <ellipse cx="124" cy="252" fill="#84B7B6" rx="79.2" ry="78.4"></ellipse>
      <g fill="#B3E2E2">
        <path d="M163.2 184c-11.2-6.4-23.2-9.6-36.8-10.4l-81.6 81.6c.8 12.8 4 25.6 10.4 36l108-107.2zM198.4 224.8L96 325.6c4.8 1.6 8.8 3.2 13.6 4l92-91.2c0-4.8-1.6-9.6-3.2-13.6zM131.2 330.4c37.6-3.2 68-33.6 71.2-71.2l-71.2 71.2z"></path>
      </g>
      <ellipse cx="380" cy="252" fill="#00233F" rx="98.4" ry="97.6"></ellipse>
      <ellipse cx="380" cy="252" fill="#84B7B6" rx="79.2" ry="78.4"></ellipse>
      <g fill="#B3E2E2">
        <path d="M419.2 184c-11.2-6.4-23.2-9.6-36.8-10.4l-81.6 81.6c.8 12.8 4 25.6 10.4 36l108-107.2zM454.4 224.8L352 325.6c4.8 1.6 8.8 3.2 13.6 4l92-91.2c0-4.8-1.6-9.6-3.2-13.6zM387.2 330.4c37.6-3.2 68-33.6 71.2-71.2l-71.2 71.2z"></path>
      </g>
      <g fill="#00233F">
        <path d="M37.6 252c0 6.4-4.8 8-11.2 8H11.2C4.8 260 0 258.4 0 252s4.8-8 11.2-8h15.2c6.4 0 11.2 1.6 11.2 8zM504 252c0 6.4-4.8 8-11.2 8h-15.2c-6.4 0-11.2-1.6-11.2-8s4.8-8 11.2-8h15.2c5.6 0 11.2 1.6 11.2 8zM298.4 252c0 6.4-12 8-27.2 8h-38.4c-15.2 0-27.2-1.6-27.2-8s12-8 27.2-8h38.4c15.2 0 27.2 1.6 27.2 8z"></path>
      </g>
    </svg>
  );
}

export default Glasses;
