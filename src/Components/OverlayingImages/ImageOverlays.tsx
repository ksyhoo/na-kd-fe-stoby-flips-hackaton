import React from 'react';
import Hat from '../../Images/hat';
import Glasses from '../../Images/glasses';
import Mustache from '../../Images/mustache';
import './overlay.css';

const overlayImage = (img: any) => {
  const hatSize = {
    width: '210px',
    height: '210px',
  };
  const glassesSize = {
    width: '200px',
    height: '200px',
  };
  const mustacheSize = {
    width: '200px',
    height: '200px',
  };

  const hatPosition = { top: -50, left: 80 } as React.CSSProperties;
  const glassesPosition = { top: 80, left: 85 } as React.CSSProperties;
  const mustachePosition = { top: 200, left: 90 } as React.CSSProperties;
  return (
    <>
      <div className="father">
        <img src={img.img} className="image" />
        <div className="child hat" style={hatPosition}>
          <Hat width={hatSize.width} height={hatSize.width} />
        </div>
        <div className="child glasses" style={glassesPosition}>
          <Glasses width={glassesSize.width} height={glassesSize.width} />
        </div>
        <div className="child mustache" style={mustachePosition}>
          <Mustache width={mustacheSize.width} height={mustacheSize.width} />
        </div>
      </div>
    </>
  );
};

export default overlayImage;
