import React from 'react'
import Link from 'next/link'

const MenuItem = ({ name, icon, isActive }) => {
  return (
    <li className={`menuItem ${isActive ? 'is-active' : ''}`}>
      <Link href="/">
        <a className="link" arial-current="page">
          <i className={icon} aria-hidden="true"></i>
          <span>{name}</span>
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
