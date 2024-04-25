'use client'

// React Imports
import { useState } from "react"

// Next Imports
import Link from "next/link"

import MenuMobile from "@/app/ui/menu-mobile";
import { usePathname } from "next/navigation";


// Icons Name | svg file name
const icons = [
  {name: 'facebook-icon', url: '#'},
  {name: 'instagram-icon', url: '#'},
  {name: 'whatsapp-icon', url: '#'},
  {name: 'tiktok-icon', url: '#'},
]

export default function NavBarMobile () {
  const pathname = usePathname()
  const regex1 = /\/products\/.*/;
  const regex2 = /\/blog\/.*/;
  const product = regex1.test(pathname)
  const post = regex2.test(pathname)
  const showNavbar = !!!(product || post)

  // Movile Menu State
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={`relative ${!showNavbar ? 'hidden' : 'block'}`}>
      <nav className='flex justify-between items-center h-auto bg-[#052659] px-5 py-4 text-white'>
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              className="w-8 h-8"
              src="/icons/mobile-menu.svg"
              alt="mobile menu icon"
            />
          </button>
          <Link href='/'>
            <p className="text-xl font-extrabold leading-6">
              Destello<br />
              &emsp;Andino
            </p>
          </Link>
        </div>
        <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu}/>
        <ul className="flex gap-4">
          {icons.map(icon => (
            <li key={icon.name}>
              <a href={icon.url}>
                <img className="w-6" src={`/icons/${icon.name}.svg`} alt={icon.name} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}



