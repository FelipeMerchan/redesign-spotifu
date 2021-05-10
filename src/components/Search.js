import React from 'react'

const Search = () => {
  return (
    <form className="search" role="search" aria-label="Buscar por artistas, canciones o podcast">
      <i
        className="icon-search"
        aria-hidden="true"
      ></i>
      <input type="search" placeholder="Buscar por artistas, canciones o podcast"/>
    </form>
  )
}

export default Search
