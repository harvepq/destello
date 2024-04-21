import ProductCard from "@/app/ui/product-card"
import Link from "next/link"

const products = [
  {
  id: 'dest001',
  href: '/products',
  name: 'Bosque de los eucaliptos',
  images: ['/products/product1.jpeg'],
  type: { days: 'Full Day', tour: 'Aventura comparitda'},
  prices: {dollars: 380, soles: 700},
  people: 2
  },
  {
    id: 'dest002',
    href: '/products',
    name: 'Piki Llacta',
    images: ['/products/product1.jpeg'],
    type: { duration: '3 Dias - 2 Noches', tour: 'Aventura en privado y compartido'},
    prices: {dollars: 450, soles: 1200},
    people: 3
  },
  {
    id: 'dest003',
    href: '/products',
    name: 'Piki Llacta',
    images: ['/products/product1.jpeg'],
    type: { duration: '3 Dias - 2 Noches', tour: 'Aventura en privado y compartido'},
    prices: {dollars: 450, soles: 1200},
    people: 3
  }
]

export default function ProductList () {
  return (
    <>
      {products.map(product => (
        <Link
          key={product.id}
          href={product.href}
        >
          <ProductCard name={product.name} image={product.images[0]} type={product.type} prices={product.prices} people={product.people} />
        </Link>
      ))}
    </>
  )
}