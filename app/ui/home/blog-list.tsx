// Nextjs Imports
import Link from "next/link";

// Components Import
import NewsCard from "../news-card";

// Data Imports
import { fetchBlogCardData } from "@/app/lib/data";



export default function BlogList () {
  const blogs = fetchBlogCardData()

  return (
    <>
      {blogs.map(blog => (
        <Link
          key={blog.id}
          href={blog.href}
        >
          <NewsCard name={blog.name} alt={blog.alt} image={blog.image} location={blog.location} />
        </Link>
      ))}
    </>
  )
}