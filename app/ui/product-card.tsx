export default function ProductCard({name, image, items, prices, people, description}: any) {
  return (
    <div className="min-w-72 max-w-md shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] rounded-xl overflow-hidden cursor-pointer">
      <picture>
        <img className="aspect-[2/1.5] object-cover" src={`products/${image}`} alt={name} />
      </picture>
      <div className="pb-3 pt-2 px-4">
        <h3 className="text-xl sm:text-2xl sm:font-semibold md:mt-2">{name}</h3>
        <div>
          <p className="text-gray-600 my-2 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-1 text-gray-600 leading-6">
          <div className="flex gap-4">
            <img src="/icons/clock.svg" alt="" className="w-6 h-6"/>
            <p>{items.duration}</p>
          </div>
          <div className="flex gap-4">
            <img src="/icons/person-walking.svg" alt="" className="w-6 h-6"/>
            <p>{items.tour}</p>
          </div>
        </div>
        <button className="w-full bg-[#052659] text-white text-lg font-bold px-6 h-12 rounded-lg hover:bg-sky-800 my-4">Ver detalle</button>
        {/* <span className="text-[#7D7D7D] block leading-4" >Desde</span>
        <div className="flex justify-between">
          <div className="flex items-end gap-2">
            <h3 className="text-xl">US$ {prices.dollars}</h3>
            <p className="text-[#7D7D7D]">por {people} personas</p>
          </div>
          <h3 className="text-xl">PEN {prices.soles}</h3>
        </div> */}
      </div>
    </div>
  )
}