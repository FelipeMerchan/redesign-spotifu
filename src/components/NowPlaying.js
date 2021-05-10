import React from 'react'
import Link from 'next/link'

const NowPlaying = ()  => {
  return (
    <div className="nowPlaying">
      <figure className="nowPlaying-cover">
        <img
          src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1620617474/spotifu/house-music-boris-brejcha_3x_xh6pur.jpg"
          alt="Portada de House Music (feat. Arctic Lake) - Edit de Boris Brejcha, Arctic Lake"
          title="Portada de House Music (feat. Arctic Lake) - Edit de Boris Brejcha, Arctic Lake"
          width="56"
          height="56"
        />
      </figure>
      <div className="nowPlaying-details">
        <div className="nowPlaying-description">
          <span className="ellipsis">
            <Link href="#song">
              <a className="nowPlaying-title">House Music (feat. Arctic Lake) - Edit</a>
            </Link>
          </span>
          <span className="ellipsis">
            <Link href="#boris">
              <a className="nowPlaying-artist">Boris Brejcha, Arctic Lake</a>
            </Link>
          </span>
        </div>
        <div className="nowPlaying-actions">
          <button
            className="player-control"
            title="Guardar en tu biblioteca"
            role="switch"
            aria-checked="false"
            aria-label="Guardar en tu biblioteca"
          >
            <i className="icon-heart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying
