import React, { useRef } from 'react';
import logo from '../../assets/logo.png';
import audioFile from '../../assets/audio/audio.mp3'; // Replace with your audio file path

const Navbar = () => {
  const audioRef = useRef(null);

  const handleAudioClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.volume = 0.4; // Set the desired volume level here (0.2 represents 20%)
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img
          className="w-[150px]"
          src={logo} // Replace with your Netflix logo image path
          alt="Netflix"
        />
        <div>
          <a
            className="text-white text-base mr-10 font-medium hover:text-gray-300 transition-colors duration-300"
            href="/contact"
            onClick={handleAudioClick}
          >
            Contact
          </a>
          <button
            className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-300"
            href="/contact"
            onClick={handleAudioClick}
          >
            Audio
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={audioFile} />
    </nav>
  );
};

export default Navbar;
