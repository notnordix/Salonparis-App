import { salonSchema, createBlogPostSchema } from "@/lib/schema"

interface StructuredDataProps {
  type: "salon" | "blogPost"
  blogPostData?: {
    title: string
    description: string
    slug: string
    datePublished: string
    image: string
  }
}

export default function StructuredData({ type, blogPostData }: StructuredDataProps) {
  let schema

  if (type === "salon") {
    schema = salonSchema
  } else if (type === "blogPost" && blogPostData) {
    schema = createBlogPostSchema(blogPostData)
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

