export default function MenuMobile () {
  return (
    <div className="bg-black/50">
      <div className="w-4/6 h-svh bg-white p-6 text-center flex flex-col justify-between">
        <div className="">
          <h2 className="text-2xl mb-8">Destello <br /> Andino</h2>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="">
                Inicio
              </a>
            </li>
            <li>
              <a href="">
                Tours
              </a>
            </li>
            <li>
              <a href="">
                Blog
              </a>
            </li>
            <li>
              <a href="">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
            <p>Viaja con los mejores del Peru</p>
            <p>Se un Destello Andino</p>
        </div>
      </div>
    </div>
  )
}
