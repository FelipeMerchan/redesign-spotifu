import React from 'react'

const PlaylistB = ({ cover, name }) => {
  return (
    <div className="playlistB">
      <figure className="playlistB-cover">
        <img
          src={cover}
          alt={`Cover de la playlist ${name}`}
          title={`Cover de la playlist ${name}`}
          width="76"
          height="76"
        />
      </figure>
      <div className="playlistB-details">
        <h3 className="playlistB-title">{name}</h3>
        <div className="playlistB-control">
          <button
            className="buttonIcon is-primary"
            title={`Reproducir la lista de reproducción ${name}`}
            aria-label={`Reproducir la lista de reproducción ${name}`}
          >
            <i className="icon-play" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistB
