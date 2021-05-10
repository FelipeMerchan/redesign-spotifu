import React from 'react'

import Navigation from './Navigation'
import Search from './Search'

const Header = () => {
  return (
    <header className="header" aria-label="Barra superior y menú del usuario">
      <Navigation />
      <Search />
    </header>
  )
}

export default Header
