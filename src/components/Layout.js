import React from 'react'

import Sidebar from './Sidebar'
import Slider from './Slider'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        {children}
        <Slider />
      </div>
    </div>
  )
}

export default Layout
