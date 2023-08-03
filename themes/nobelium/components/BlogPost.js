import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.SUB_PATH}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-8">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <time className="flex-shrink-0 text-gray-600 dark:text-gray-400 mb-2 md:mb-0">
            {formatDate(post?.publishDay || post.createdTime, BLOG.LANG)}
          </time>
          <h2 className="text-lg md:text-xl font-medium cursor-pointer text-black dark:text-gray-100">
            {post.title}
          </h2>
        </header>
        <main>
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  )
}

export default BlogPost
