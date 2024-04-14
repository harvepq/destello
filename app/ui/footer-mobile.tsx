// Icons Name | svg file name
const icons = [
  {name: 'facebook-icon', url: '#'},
  {name: 'instagram-icon', url: '#'},
  {name: 'whatsapp-icon', url: '#'},
  {name: 'tiktok-icon', url: '#'},
]

const footerLinks = [
  {name: 'Nosotros', url: '#'},
  {name: 'Tours', url: '#'},
  {name: 'Experiencias', url: '#'},
  {name: 'Nosotros', url: '#'}
]

export default function FooterMobile () {
  return (
    <footer>
      <div className="flex flex-col items-center bg-[#052659] text-white px-5 py-4">
        <ul className="flex gap-4 py-4">
          {icons.map(icon => (
            <li key={icon.name}>
            <a href={icon.url}>
              <img src={`/icons/${icon.name}.svg`}alt={icon.name} />
            </a>
          </li>
          ))}
        </ul>
        <div className="w-full flex justify-around border-t-[1px] border-gray-500 pt-4 ">
          <h3 className="text-xl text-center">
            Destello
            <br />
            Andino
          </h3>
          <ul className="text-center leading-4 text-neutral-300">
            {footerLinks.map(link => (
              <li key={link.name}>
                <a className="text-sm" href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 items-center bg-black text-white text-sm ">
        <span className="">Copyright Ⓒ 2024</span>
        <ul className="flex gap-4">
          <li>
            <a href="">Terminos y Condiciones</a>
          </li>
          <li>
            <a href="">Privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}