// Icons Name | svg file name
const icons = [
  {name: 'facebook-icon', url: '#'},
  {name: 'instagram-icon', url: '#'},
  {name: 'whatsapp-icon', url: '#'},
  {name: 'tiktok-icon', url: '#'},
]

export default function NavBarMobile () {
  return (
    <header>
      <nav className='flex justify-between items-center h-auto bg-[#052659] px-5 py-4 text-white'>
        <div className="flex justify-between items-center gap-4">
          <img 
            className="w-8 h-8" 
            src="/icons/mobile-menu.svg" 
            alt="mobile menu icon" 
          />
          <p className="text-xl font-extrabold leading-6">
            Destello<br />
            &emsp;Andino
          </p>
        </div>
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



