import React from 'react'

import Navigation from './Navigation'

const PlaylistList = ({ children, region, title }) => {
  return (
    <section className="playlistList" aria-labelledby={region}>
      <div className="playlistList-top">
        <h2 className="playlistList-title" id={region}>
          {title}
        </h2>
        <Navigation />
      </div>
      <div className="playlistList-wrapper">
        {children}
      </div>
    </section>
  )
}

export default PlaylistList
