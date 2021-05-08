import React from 'react'

import Sidebar from './Sidebar'
import Player from './Player'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        {children}
        <Player />
      </div>
    </div>
  )
}

export default Layout
