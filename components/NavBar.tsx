import Link from 'next/link'

import { NavLinks } from '@/constants'

import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'


const NavBar = async () => {
 

  const session = await getCurrentUser();

  return (
    <nav className='flexBetween navbar'>

      <div className='flex-1 flexStart gap-10'>
        <Link className="logo" href="/">
          skribble
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};


export default NavBar
