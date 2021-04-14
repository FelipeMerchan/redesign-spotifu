import React from 'react'

import Logo from './Logo'
import List from './List'

const Layout = ({ children }) => {
  return (
    <div>
      <Logo />
      <List />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
