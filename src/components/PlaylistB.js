import React from 'react'

const PlaylistB = () => {
  return (
    <div className="playlistB">
      <figure className="playlistB-cover">
        <img
          src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1620582333/spotifu/playlists/anime-hits_sovhky.jpg"
          alt="Cover de la playlist Anime Hits"
          width="76"
          height="76"
        />
      </figure>
      <div className="playlistB-details">
        <h3 className="playlistB-title">Naturo Openings & Endings</h3>
        <div className="playlistB-control">
          <button
            className="buttonIcon is-primary"
            title="Reproducir la lista de reproducción Naruto Openings & Endings"
            aria-label="Reproducir la lista de reproducción Naruto Openings & Endings"
          >
            <i className="icon-play" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistB
