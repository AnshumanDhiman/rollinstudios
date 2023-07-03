import React, { useRef,useState } from 'react';
import logo from '../../assets/logo.png';
import audioFile from '../../assets/audio/audio.mp3'; // Replace with your audio file path
import { Switch } from '@headlessui/react'

const Navbar = () => {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false)

  // Handle audio play/pause using setEnabled
  const handleAudioClick = () => {
    if (enabled) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.4; 
    }
    setEnabled(!enabled);
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
        <Switch
      checked={enabled}
      onChange={handleAudioClick}
      className={`${
        enabled ? 'bg-theme_red_2' : 'bg-theme_red_2'
      } relative inline-flex h-6 w-11 items-center rounded-full mr-10 `}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-theme_red_1 transition`}
      />
    </Switch>
          <a
            className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-300"
            href="/contact"
            onClick={handleAudioClick}
          >
            Contact
          </a>
        
        </div>
      </div>
      <audio ref={audioRef} src={audioFile} />
    </nav>
  );
};

export default Navbar;
