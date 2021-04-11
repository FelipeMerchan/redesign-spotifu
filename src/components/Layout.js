import React from 'react'

import Logo from './Logo'

const Layout = ({ children }) => {
  return (
    <div>
      <Logo />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
