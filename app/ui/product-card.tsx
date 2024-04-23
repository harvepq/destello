export default function ProductCard({name, image, items, prices, people}: any) {
  return (
    <div className="min-w-72 max-w-md shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] rounded-xl overflow-hidden cursor-pointer">
      <picture>
        <img className="aspect-[2/1.5] object-cover" src={image} alt={name} />
      </picture>
      <div className="pb-3 pt-2 px-4">
        <h3 className="text-xl">{name}</h3>
        <div className="py-1 text-[#7D7D7D] leading-6">
          <div className="flex gap-2">
            <img src="/icons/clock.svg" alt="" />
            <p>{items.duration}</p>
          </div>
          <div className="flex gap-2">
            <img src="/icons/person-walking.svg" alt="" />
            <p>{items.tour}</p>
          </div>
        </div>
        <span className="text-[#7D7D7D] block leading-4" >Desde</span>
        <div className="flex justify-between">
          <div className="flex items-end gap-2">
            <h3 className="text-xl">US$ {prices.dollars}</h3>
            <p className="text-[#7D7D7D]">por {people} personas</p>
          </div>
          <h3 className="text-xl">PEN {prices.soles}</h3>
        </div>
      </div>
    </div>
  )
}