import React from 'react'

import Slider from './Slider'

const PlayerPlayback = () => {
  return (
    <div className="playerPlayback">
      <span className="playerPlayback-progressTime">01:40</span>
      <div className="playerPlayback-slider">
        <Slider />
      </div>
      <span className="playerPlayback-progressTime">03:25</span>
    </div>
  )
}

export default PlayerPlayback
