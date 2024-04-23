import Image from "next/image"

export default function NewsCard ({name, alt, image, location} : any) {
  return (
    <div className="flex flex-col items-center relative min-w-72 max-w-md rounded-xl overflow-hidden">
      <picture>
        <img className="aspect-[2/1.3] object-cover brightness-90" src={image} alt={alt} />
      </picture>
      <div className="text-white absolute bottom-4">
        <p className="text-xl">{name}</p>
        <div className="flex justify-center items-center gap-2">
          <img src="/icons/geo-alt.svg" alt="" />
          <span className="text-base">{location}</span>
        </div>
      </div>
    </div>
  )
}