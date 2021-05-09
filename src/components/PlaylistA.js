import React from 'react'

const PlaylistA = ({ cover, name, description }) => {
  return (
    <div className="playlistA">
      <figure className="playlistA-cover">
        <img
          src={cover}
          alt={`Cover de la playlist ${name}`}
          title={`Cover de la playlist ${name}`}
          width="150"
          height="150"
        />
        <button className="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
          <i className="icon-play" aria-hidden="true"></i>
        </button>
      </figure>
      <h3 className="playlistA-title">{name}</h3>
      <h4 className="playlistA-description">{description}</h4>
    </div>
  )
}

export default PlaylistA
