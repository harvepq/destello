'use client'

// Next Imports
import Link from "next/link"

// Utils Imports
import { socialNetworks } from "@/app/lib/varibles";
import { links } from "@/app/lib/varibles";
import {pathValidate} from "@/app/lib/utils"
import { usePathname } from "next/navigation";

export default function Footer () {
  const pathname = usePathname()
  const showFooter  = pathValidate(pathname)

  return (
    <footer className={`${showFooter ? 'block' : 'hidden'} md:block`}>
      <div className="flex flex-col items-center justify-center bg-[#052659] text-white px-5 py-4 lg:px-20">
        <ul className="flex gap-10 py-4 mb-2">
          {socialNetworks.map(socialMedia => (
            <li key={socialMedia.name}>
              <Link
                href={socialMedia.href}
                target="_blank"
              >
                <img
                  src={`/icons/${socialMedia.icon}.svg`}
                  alt={`${socialMedia.name} icon`}
                  className="w-6 h-6"
                />
              </Link>
          </li>
          ))}
        </ul>
        <div className="w-full items-center flex justify-around border-t-[1px] border-gray-500 pt-4 ">
          <Link
            href={'/'}
          >
            <img src="/icons/logo.png" alt="Logo destello andino"
              className="h-20"
              />
          </Link>
          <div className="text-center text-neutral-300">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="block p-1"
              >
                <p className="text-base font-bold">{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 items-center bg-black text-white text-sm lg:px-20 ">
        <span className="">Copyright Ⓒ 2024</span>
        <ul className="flex gap-4">
          <li>
            <a href="/">Términos y Condiciones</a>
          </li>
          <li>
            <a href="/">Privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}