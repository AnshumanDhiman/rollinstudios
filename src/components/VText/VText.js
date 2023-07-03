import React from 'react';
import './VText.css';
import vid from '../../assets/video/video.mp4';

const GridComponent = () => {
    return (
        <>
          <div className="grid grid-cols-2 gap-4 pt-32 pb-64">
            <div className="col-span-1 py-28 px-32">
            <h1 className="text-6xl font-bold text-[#950101]">LIGHTS, CAMERA</h1>
          </div>
            <div className="col-span-1 px-8 py-8">
            <div  className="video-section">
            <video src={vid} loop autoPlay muted />
            <div className='video-copy'>
            <h1  className='font-this font-bold'>ROLLIN</h1>
            </div>
            </div>
          </div>
            </div>
        </>
    );
  };

export default GridComponent;



