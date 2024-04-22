import {
  products,
  blogs,
  reasons,
  tours
} from './placeholder-data';

export function fetchProducts () {
  try {
    const data = products
    return data
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error('Failed to fetch products data.')
  }
}

export function fetchProductCardData () {
  try {
    const data = products.map(product => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        image: `/products/${product.images[0]}`,
        href: `/products/${product.slug}`,
        items: {
          duration: product.items[1].description,
          tour: product.items[2].description
        },
        prices: product.prices,
        people: product.people
      }
    })
    return data
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error('Failed to fetch product card data.')
  }
}

export function fetchProductBySlug(slug: string) {
  try {
    const data = products.filter(product => product.slug === slug)
    return data[0]
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error('Failed to fetch product.')
  }
}

export function fetchBlogs () {
  try {
    const data = blogs
    return data
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error('Failed to fetch blogs data.')
  }
}

export function fetchBlogCardData() {
  try {
    const data = blogs.map(blog => {
      return {
        id: blog.id,
        name: blog.name,
        href: `/blog/${blog.slug}`,
        image: blog.images[0],
        alt: blog.alt,
        location: blog.location
      }
    })
    return data
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error ('Failed to fetch blog card data.')
  }
}

export function fetchReasons () {
  try {
    const data = reasons
    return data
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error('Failed to fetch reasons data.')
  }
}

export function fetchTours () {
  try {
    const data = tours
    return data
  } catch (error) {
    console.error('Database Error: ', error)
    throw new Error('Failes to fetch tours data.')
  }
}

