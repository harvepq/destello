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
  console.log(showMenu)

  return (
      <div
        className={`w-full h-svh bg-black/50 transition ease-in-out duration-500 delay-0 ${showMenu ? '':'-translate-x-full'}`}
        onClick={(event) => setShowMenu(!showMenu)}
      >
        <aside
          className="w-3/4 h-full bg-white p-6 text-center flex flex-col justify-between"
          onClick={(event) => event.stopPropagation()}
        >
          <nav className="">
            <h2 className="text-2xl mb-8">Destello <br /> Andino</h2>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex h-[40px] grow items-center justify-center rounded-md bg-gray-50 ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </nav>
          <div className="mb-8">
              <p>Viaja con los mejores del Peru</p>
              <p>Se un Destello Andino</p>
          </div>
        </aside>
      </div>
  )
}
