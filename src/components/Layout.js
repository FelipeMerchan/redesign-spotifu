import React from 'react'

import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
