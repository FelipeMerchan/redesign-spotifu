import React from 'react'

import Slider from './Slider'

const PlayerVolume = () => {
  return (
    <div className="playerVolume">
      <button className="player-control" aria-label="Silenciar" aria-describedby="volume-icon">
        <i className="icon-volumeUp" id="volume-icon" role="presentation" aria-label="Volumen alto"></i>
      </button>
      <div className="playerVolume-slider">
        <Slider />
      </div>
    </div>
  )
}

export default PlayerVolume
