import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="navigation">
      <Link href="/">
        <button className="navigation-prev" aria-label="Volver" title="Volver">
          <i className="icon-arrowLeft" aria-hidden="true"></i>
        </button>
      </Link>
      <Link href="/">
        <button className="navigation-next" aria-label="Avanzar" title="Avanzar" disabled="disabled">
          <i className="icon-arrowRight" aria-hidden="true"></i>
        </button>
      </Link>
    </div>
  )
}

export default Navigation
