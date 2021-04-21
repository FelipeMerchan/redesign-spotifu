import React from 'react'

import Logo from './Logo'
import Menu from './Menu'
import List from './List'

const Layout = ({ children }) => {
  return (
    <div>
      <Logo />
      <Menu />
      <List />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
