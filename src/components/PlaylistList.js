import React from 'react'

const PlaylistList = ({ children, region, title }) => {
  return (
    <section className="playlistList" aria-labelledby={region}>
      <div className="playlistList-top">
        <h2 className="playlistList-title" id={region}>
          {title}
        </h2>
      </div>
      <div className="playlistList-wrapper">
        {children}
      </div>
    </section>
  )
}

export default PlaylistList
