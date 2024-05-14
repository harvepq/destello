import Image from "next/image"

export default function NewsCard ({name, alt, image, location} : any) {
  return (
    <div className="flex flex-col items-center relative min-w-72 max-w-md rounded-xl overflow-hidden xl:min-w-64 md:hover:scale-105">
      <picture>
        <img className="aspect-[2/1.3] object-cover brightness-90 xl:aspect-[1/1.5]" src={`/blog/${image}`} alt={alt} />
      </picture>
      <div className="w-full text-center text-white absolute bottom-0 py-4 bg-black/30 lg:py-6">
        <p className="text-xl lg:font-bold">{name}</p>
        <div className="flex justify-center items-center gap-2">
          <img src="/icons/geo-alt.svg" alt="" />
          <span className="text-base lg:text-lg">{location}</span>
        </div>
      </div>
    </div>
  )
}