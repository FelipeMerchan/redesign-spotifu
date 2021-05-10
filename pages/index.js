import React from 'react'

import data from '../data.json'
import PlaylistA from '../src/components/PlaylistA'
import PlaylistB from '../src/components/PlaylistB'
import PlaylistList from '../src/components/PlaylistList'
import Search from '../src/components/Search'

const Home = () => {
  return (
    <>
      <main>
        <Search />
        <PlaylistList region="region1" title="Buenas noches">
          {
            data.topPlaylist.map(playlist =>
              <PlaylistB
                key={playlist.id}
                cover={playlist.cover}
                name={playlist.name}
              />
            )
          }
        </PlaylistList>
        <PlaylistList region="region2" title="Escuchado recientemente">
          {
            data.escuchadoRecientemente.map(playlist =>
              <PlaylistA
                key={playlist.id}
                cover={playlist.cover}
                name={playlist.name}
                description={playlist.description}
              />
            )
          }
        </PlaylistList>
      </main>
    </>
  )
}

export default Home
