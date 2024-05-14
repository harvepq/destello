// Nextjs Imports
import Link from "next/link"

// Components Imports
import ProductCard from "@/app/ui/product-card"

// Data Imports
import {fetchProductCardData} from "@/app/lib/data"

export default function ProductList () {
  const products = fetchProductCardData()

  return (
    <>
      {products.map(product => (
        <Link
          key={product.id}
          href={product.href}
        >
          <ProductCard name={product.name} description={product.description} image={product.image} items={product.items} prices={product.prices} people={product.people} />
        </Link>
      ))}
    </>
  )
}