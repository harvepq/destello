// Components imports
import Post from "@/app/ui/blog/post"

// Data Imports
import { fetchBlogAllSlug } from "@/app/lib/data"

export function generateStaticParams() {
  const posts = fetchBlogAllSlug()
  return posts.map((post) => ({
    slug: post
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  return (
    <Post slug={slug}/>
  )
}