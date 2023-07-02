import React from 'react';
import video from '../../assets/video/video.mp4'

const HeroSection = () => {
  return (
    <div className="relative">
    <div className="relative h-[30rem] md:h-120">
      <video
        className="w-full h-full object-cover"
        src={video} // Replace with your video source
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-white text-5xl font-semibold mb-8">
          Your destination for artful superiority 
          </h1>
          {/* <p className="text-white text-xl mb-12">
            Watch your favorite movies and TV shows anytime, anywhere.
          </p> */}
          {/* <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300">
            Explore
          </button> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default HeroSection;
