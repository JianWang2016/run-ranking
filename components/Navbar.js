import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src='/img/runners-logo.png' width={128} height={77} alt='logo'/>
        </div>
        <Link href='/'>All</Link>
        <Link href='/male'>Male</Link>
        <Link href='/female'>Female</Link>
        <Link href='/entry'>Join</Link>
        <Link href='/about'>About</Link>
    </nav>
  )
}

export default Navbar