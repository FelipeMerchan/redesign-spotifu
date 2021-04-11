import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <header className="logo" role="banner">
      <Link href="/">
        <a aria-current="page">
          <img
            className="logo-image"
            src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1618122897/spotifu/spotifu-logo_s5kari.svg"
            alt="Logo de Spotifu"
            width="112"
            height="32"
          />
        </a>
      </Link>
    </header>
  )
}

export default Logo
