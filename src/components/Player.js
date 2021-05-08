import React from 'react'

import NowPlaying from './NowPlaying'
import PlayerControls from './PlayerControls'
import PlayerVolume from './PlayerVolume'

const Player = () => {
  return (
    <div className="player">
      <div className="player-nowPlaying">
        <NowPlaying />
      </div>
      <div className="player-playerControls">
        <PlayerControls />
      </div>
      <div className="player-playerVolume">
        <PlayerVolume />
      </div>
    </div>
  )
}

export default Player
