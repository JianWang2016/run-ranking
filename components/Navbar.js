import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src='/img/runners-logo.png' width={128} height={77}/>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/login'>Login</Link>
        <Link href='/about'>About</Link>
    </nav>
  )
}

export default Navbar