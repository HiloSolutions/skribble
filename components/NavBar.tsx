import Link from 'next/link';
import Image from "next/image";

import { NavLinks } from '@/constants';
import ProfileMenu from './ProfileMenu';

import AuthProviders from './AuthProviders';
import { getCurrentUser } from '@/lib/session';
import { signOut } from 'next-auth/react';


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
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-project">
              Share Work
            </Link>
            <button type="button" className="text-sm" onClick={signOut}>
              Sign Out
            </button>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};


export default NavBar
