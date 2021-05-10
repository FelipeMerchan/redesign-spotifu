import React from 'react'

import Slider from './Slider'

const PlayerPlayback = () => {
  return (
    <div className="playerPlayback">
      <span className="playerPlayback-progressTime">00:33</span>
      <div className="playerPlayback-slider">
        <Slider />
      </div>
      <span className="playerPlayback-progressTime">02:59</span>
    </div>
  )
}

export default PlayerPlayback
