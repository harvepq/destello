'use client'

// Import Nextjs Components
import Link from "next/link"
import { usePathname } from "next/navigation"

interface stateProps {
  showMenu: boolean;
  setShowMenu: any
}

// Links
const links = [
  {name: 'Inicio', href: '/'},
  {name: 'Tours', href: '/tours'},
  {name: 'Blog', href: '/blog'},
  {name: 'Nosotros', href: '/about'}
]

export default function MenuMobile ({showMenu, setShowMenu} : stateProps) {

  const pathname = usePathname()

  return (
      <div
        className={`fixed top-0 left-0 right-0 z-10 w-full h-svh bg-black/40 transition ease-in-out duration-500 delay-0 text-black ${!showMenu ? '-translate-x-full' : ''}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <aside
          className="w-3/4 h-full flex flex-col justify-between bg-white p-6 text-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="">
            <h2 className="text-2xl mb-8">Destello <br /> Andino</h2>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex h-[40px] grow items-center justify-center rounded-md bg-gray-50 ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
          <div className="mb-8">
              <p>Viaja con los mejores del Peru</p>
              <p>Se un Destello Andino</p>
          </div>
        </aside>
      </div>
  )
}
