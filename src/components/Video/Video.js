import React from 'react'
import video from '../../assets/video/video.mp4'

export default function Video() {
  return (
    <>
        <video autoPlay loop muted src={video} className='absolute w-full top-0 z-[-999]'/>
    </>
  )
}
