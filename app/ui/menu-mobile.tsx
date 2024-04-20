'use client'

// Import Nextjs Components
import Link from "next/link"
import { usePathname } from "next/navigation"



// Links
const links = [
  {name: 'Inicio', href: '/'},
  {name: 'Tours', href: '/tours'},
  {name: 'Blog', href: '/blog'},
  {name: 'Nosotros', href: '/about'}
]

export default function MenuMobile () {
  const pathname = usePathname()

  return (
    <div className="bg-black/50">
      <div className="w-4/6 h-svh bg-white p-6 text-center flex flex-col justify-between">
        <div className="">
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
        </div>
        <div className="mb-8">
            <p>Viaja con los mejores del Peru</p>
            <p>Se un Destello Andino</p>
        </div>
      </div>
    </div>
  )
}
