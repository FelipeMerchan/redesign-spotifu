import React from 'react'

import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <nav className="menu" aria-label="Principal">
      <ul className="menu-list">
        <MenuItem
          name="Inicio"
          icon="icon-home"
          isActive={true}
        />
        <MenuItem
          name="Buscar"
          icon="icon-search"
          isActive={false}
        />
        <MenuItem
          name="Premium"
          icon="icon-creditCard"
          isActive={false}
        />
      </ul>
    </nav>
  )
}

export default Menu
