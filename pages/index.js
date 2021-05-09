import React from 'react'

import data from '../data.json'
import PlaylistA from '../src/components/PlaylistA'
import PlaylistB from '../src/components/PlaylistB'
import PlaylistList from '../src/components/PlaylistList'

const Home = () => {
  return (
    <>
      <main>
        <PlaylistList region="region1" title="Buenas noches">
          <PlaylistB />
          <PlaylistB />
          <PlaylistB />
          <PlaylistB />
          <PlaylistB />
        </PlaylistList>
        <PlaylistList region="region2" title="Escuchado recientemente">
          <PlaylistA />
          <PlaylistA />
          <PlaylistA />
          <PlaylistA />
          <PlaylistA />
          <PlaylistA />
          <PlaylistA />
          <PlaylistA />
        </PlaylistList>
      </main>
    </>
  )
}

export default Home
