'use client'

// React Imports
import { useState } from "react"

// Nextjs Imports
import Link from "next/link"
import { usePathname } from "next/navigation";

// Components Imports
import MenuMobile from "@/app/ui/menu-mobile";

// Utils Imports
import {pathValidate} from "@/app/lib/utils"
import { socialNetworks } from "@/app/lib/varibles";

export default function Navbar () {
  const pathname = usePathname()
  const showNavbar  = pathValidate(pathname)

  // Mobile Menu State
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={`relative ${!showNavbar ? 'hidden' : 'block'} sm:sticky sm:top-0 sm:z-10`}>
      <nav className='flex justify-between items-center h-auto bg-[#052659] px-5 py-4 text-white md:px-20'>
        <div className="flex justify-between items-center gap-4">
          <button
            className="sm:hidden"
            onClick={() => setShowMenu(true)}
          >
            <img
              className="w-8 h-8"
              src="/icons/mobile-menu.svg"
              alt="hamburger menu icon"
            />
          </button>
          <Link href='/'>
            <p className="text-xl font-extrabold leading-6">
              Destello
              <br />
              &emsp; Andino
            </p>
          </Link>
        </div>

        <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} pathname={pathname} />

        <ul className="flex gap-4">
          {socialNetworks.map(socialMedia => (
            <li key={socialMedia.name}>
              <a href={socialMedia.href}>
                <img className="w-6 h-6" src={`/icons/${socialMedia.icon}.svg`} alt={`${socialMedia.name} icon`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}



