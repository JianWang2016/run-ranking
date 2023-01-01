import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <h1>navbar list</h1>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/login'>Login</Link>
        <Link href='/about'>About</Link>
    </nav>
  )
}

export default Navbar