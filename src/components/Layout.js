import React from 'react'

import Sidebar from './Sidebar'
import Player from './Player'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        {children}
      </div>
      <footer className="layout-bottom">
        <Player />
      </footer>
    </div>
  )
}

export default Layout
