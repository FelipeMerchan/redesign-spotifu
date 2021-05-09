import React from 'react'

const PlaylistA = () => {
  return (
    <div className="playlistA">
      <figure className="playlistA-cover">
        <img
          src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1620582333/spotifu/playlists/anime-hits_sovhky.jpg"
          alt="Cover de la playlist Anime Hits"
          width="150"
          height="150"
        />
        <button className="buttonIcon is-primary" aria-label="Reproducir" title="Reproducir">
          <i className="icon-play" aria-hidden="true"></i>
        </button>
      </figure>
      <h3 className="playlistA-title">Anime Hits</h3>
      <h4 className="playlistA-description">Naruto, Your Name, Weathing With You</h4>
    </div>
  )
}

export default PlaylistA
