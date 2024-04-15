import Image from "next/image"

const news = {
  id: 'news2',
  url: '#', 
  slogan: 'Viaja, Suena y Vive', 
  location: 'Madre de Dios', 
  imageName: 'news2', 
  shortDescription: '??'
}

export default function NewsCard () {
  return (
    <div className="flex flex-col items-center relative min-w-72 max-w-96 rounded-xl overflow-hidden">
      <picture>
        <img className="aspect-[2/1.1] object-cover brightness-90" src={`/icons/${news.imageName}.jpg`}alt={news.shortDescription} />
      </picture>
      <div className="text-white absolute bottom-2">
        <p className="text-xl">{news.slogan}</p>
        <div className="flex justify-center items-center gap-2">
          <img src="/icons/geo-alt.svg" alt="" />
          <span className="text-sm">{news.location}</span>
        </div>
      </div>
    </div>
  )
}