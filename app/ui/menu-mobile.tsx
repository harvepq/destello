// Import Nextjs Components
import Link from "next/link"

// Utils Imports
import { links } from "@/app/lib/varibles";

interface stateProps {
  showMenu: boolean;
  setShowMenu: any;
  pathname: string
}

export default function MenuMobile ({showMenu, setShowMenu, pathname} : stateProps) {
  return (
      <div
        className={`fixed top-0 left-0 right-0 z-10 w-full h-svh bg-black/40 transition ease-in-out duration-500 delay-0 text-black  ${!showMenu ? '-translate-x-full' : ''} sm:static sm:h-full sm:translate-x-0 sm:bg-transparent sm:text-white sm:transition-none sm:w-auto`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <aside
          className="w-3/4 h-full flex flex-col justify-between bg-white p-6 text-center sm:w-full sm:bg-transparent sm:p-0"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="">
            <h2 className="text-2xl mb-8 sm:hidden">Destello <br /> Andino</h2>
            <div className="border-t border-b py-10 sm:border-0 sm:flex sm:p-0 lg:gap-12">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex h-[40px] grow items-center justify-center rounded-md ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <p className="text-lg sm:px-4 md:text-xl">{link.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-8 sm:hidden">
            <div className="flex flex-col gap-2 items-center justify-center mb-10">
              <p>Contactanos al:</p>
              <div className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </div>
              <p>+51 923 343 453</p>
            </div>
            <div>
              <p>Viaja con los mejores del Peru</p>
              <p>Se un Destello Andino</p>
            </div>
          </div>
        </aside>
      </div>
  )
}
