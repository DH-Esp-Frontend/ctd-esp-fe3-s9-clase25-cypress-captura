import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <Image src="/logo.png" alt="logo-netflix" width={150} height={55} />
      </div>
        <a>Iniciar sesion</a>
    </nav>
  )
}

export default Navbar