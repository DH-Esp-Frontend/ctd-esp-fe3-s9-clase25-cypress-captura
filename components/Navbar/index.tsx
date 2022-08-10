import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav style={{width: "90vw", padding: "1rem", display: "flex", justifyContent: "space-between"}} >
        <Image src="/logo.png" alt="logo-netflix" width={150} height={55} />
        <a style={{left: "0"}}>Iniciar sesion</a>
    </nav>
  )
}

export default Navbar