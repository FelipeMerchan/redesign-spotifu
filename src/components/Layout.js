import React from 'react'

import Sidebar from './Sidebar'
import PlayerControls from './PlayerControls'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        {children}
        <PlayerControls />
      </div>
    </div>
  )
}

export default Layout
