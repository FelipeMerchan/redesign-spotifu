import React from 'react'
import Link from 'next/link'

const List = () => {
  return (
    <>
      <nav className="list" aria-labelledby="library-navigation">
        <h2 className="list-title" id="library-navigation">Tu Biblioteca</h2>
        <ul className="list-content">
          <li className="list-item">
            <Link href="/">
              <a className="link" aria-current="page">
                Creada para ti
              </a>
            </Link>
          </li>
          <li className="list-item">
            <Link href="/">
              <a className="link" aria-current="page">
                Escuchado recientemente
              </a>
            </Link>
          </li>
          <li className="list-item">
            <Link href="/">
              <a className="link" aria-current="page">
                Tus Me Gusta
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="list" aria-labelledby="playlist-navigation">
        <h2 className="list-title" id="playlist-navigation">Playlists</h2>
        <ul className="list-content">
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Lo mejor de los mejor
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Naruto al 100% para programar
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Sin parar
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Naruto openings
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Boku no pico
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  This is Pokémon
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Más populares de la semana
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Mis pistas de shazam
                </a>
              </Link>
            </span>
          </li>
          <li className="list-item">
            <span className="ellipsis">
              <Link href="/">
                <a className="link" aria-current="page">
                  Audio Library
                </a>
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default List
