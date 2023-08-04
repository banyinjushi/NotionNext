
import Image from 'next/image'
import BLOG from '@/blog.config'
import TagItem from './TagItem'
import md5 from 'js-md5'

export const ArticleInfo = (props) => {
  const { post } = props

  const emailHash = md5(BLOG.CONTACT_EMAIL)

  return <section className="flex-wrap flex mt-2 text-gray--600 dark:text-gray-400 font-light leading-8">
        <div>

            <div className="font-bold text-3xl text-black dark:text-white">
            {post?.title}
            </div>
            {post?.type !== 'Page' && <>
            <nav className="flex mt-4 items-start text-gray-500 dark:text-gray-400">
            {/* <div className="ml-0 md:block" style={{ color: '#586c96' }} >DoRight</div> */}
            <a href="../aboutme" className="ml-0 md:block" style={{ color: '#586c96' }}>DoRight</a>
            <div style={{ margin: '0 7px' }}> &nbsp; </div> 
            <a href="../" className="ml-0 md:block" style={{ color: '#586c96' }}>须臾所思</a>
            {/* <div className="ml-0 md:block" style={{ color: '#586c96' }} >须臾所思</div> */}
            <div style={{ margin: '0 7px' }}> &nbsp; </div> 
            <div className="mr-0 mb-4 md:ml-0">
              {post?.publishDay}
            </div>
            {post?.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                {post?.tags.map(tag => (
                  <TagItem key={tag} tag={tag} />
                ))}
              </div>
            )}
             </nav>
            </>}

        </div>

    </section>
}
