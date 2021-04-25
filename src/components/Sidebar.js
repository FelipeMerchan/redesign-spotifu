import React from 'react'

import Logo from './Logo'
import Menu from './Menu'
import List from './List'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu />
      <List />
    </div>
  )
}

export default Sidebar
