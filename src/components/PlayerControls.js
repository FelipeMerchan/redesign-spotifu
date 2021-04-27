import React from 'react'

import PlayerPlayback from './PlayerPlayback'

const PlayerControls = () => {
  return (
    <div className="playerControls">
      <div className="playerControls-buttons">
        <button className="buttonIcon" aria-label="Anterior" title="Anterior">
          <i className="icon-prev" aria-hidden="true"></i>
        </button>
        <button className="buttonIcon is-white" aria-label="Reproducir" title="Reproducir">
          <i className="icon-play" aria-hidden="true"></i>
        </button>
        <button className="buttonIcon" aria-label="Siguiente" title="Siguiente">
          <i className="icon-next" aria-hidden="true"></i>
        </button>
      </div>
      <PlayerPlayback />
    </div>
  )
}

export default PlayerControls
