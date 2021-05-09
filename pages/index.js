import React from 'react'

import data from '../data.json'
import PlaylistA from '../src/components/PlaylistA'
import PlaylistB from '../src/components/PlaylistB'

const Home = () => {
  return (
    <>
      <main>
        <PlaylistA />
        <PlaylistB />
      </main>
    </>
  )
}

export default Home
