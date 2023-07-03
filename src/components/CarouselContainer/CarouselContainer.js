import React from 'react'
import ACard from '../Cards/Ads/ACards'
import FCard from '../Cards/Films/FCards'
import MCard from '../Cards/Music/MCards'

export default function Container() {
  return (
    <>
    <div className="container mx-auto px-10 py-20"> 
        <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        <p className="text-2xl font-bold">Branding your digital Presence</p>
        <ACard />
        </div>
        <div className="flex flex-wrap -mx-2 mt-[75px] overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        <p className="text-2xl font-bold">Your screening platform, visuals to the sound, visualizing music</p>

        <FCard />
        </div>
       
        <div className="flex flex-wrap -mx-2 mt-[75px] overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        <p className="text-2xl font-bold">Experience cinematic brilliance</p>
        <MCard />
        </div>
    </div>
    </>

  )
}
