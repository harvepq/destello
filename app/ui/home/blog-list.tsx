// Nextjs Imports
import Link from "next/link";

// Components Import
import NewsCard from "../news-card";

const news = {
  id: 'news2',
  url: '#',
  slogan: 'Viaja, Suena y Vive',
  location: 'Madre de Dios',
  imageName: 'news2',
  shortDescription: '??'
}


const blogs = [
  {
    id: 'blog001',
    href: '/blog',
    name: 'Viaja, Suena y Vive',
    images: ['/icons/news1.jpg'],
    alt: 'Imagen de salcantay',
    location: 'Madre de Dios'
  },
  {
    id: 'blog002',
    href: '/blog',
    name: 'Se un Destello Andino',
    images: ['/icons/news2.jpg'],
    alt: 'Imagen de salcantay',
    location: 'Sicuani - Cusco'
  },
  {
    id: 'blog003',
    href: '/blog',
    name: 'Nunca pares de Viajar',
    images: ['/products/product1.jpeg'],
    alt: 'Imagen de salcantay',
    location: 'Piki Llacta - Cusco'
  }
]

export default function BlogList () {
  return (
    <>
      {blogs.map(blog => (
        <Link
          key={blog.id}
          href={blog.href}
        >
          <NewsCard name={blog.name} alt={blog.alt} image={blog.images[0]} location={blog.location} />
        </Link>
      ))}
    </>
  )
}