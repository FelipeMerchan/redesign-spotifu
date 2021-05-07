import React from 'react'
import Link from 'next/link'

const NowPlaying = ()  => {
  return (
    <div className="nowPlaying">
      <figure className="nowPlaying-cover">
        <img
          src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1620426637/spotifu/grand-escape_3x_dsekaq.jpg"
          alt="Portada de Grand Escape (feat. Tokio Miura) de RADWIMPS, Toko Miura"
          title="Portada de Grand Escape (feat. Tokio Miura) de RADWIMPS, Toko Miura"
          width="56"
          height="56"
        />
      </figure>
      <div className="nowPlaying-details">
        <div className="nowPlaying-description">
          <Link href="#song">
            <a className="nowPlaying-title">Grand Escape (feat. Tokio Miura)</a>
          </Link>
          <Link href="#RADWIMPS">
            <a className="nowPlaying-artist">RADWIMPS, Toko Miura</a>
          </Link>
        </div>
        <div className="nowPlaying-actions">
          <button className="player-control" title="Guardar en tu biblioteca" role="switch" aria-label="Guardar en tu biblioteca">
            <i className="icon-heart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying
