import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'
import Vercel from '@/components/Vercel'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post, postCount } = props
  const fullWidth = post?.fullWidth ?? false

  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return <footer
     className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
       !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
     }`}
   >

     {/* <DarkModeButton className='text-center pt-4'/> */}
     <hr className="border-gray-200 dark:border-gray-600" />
     <div className="my-4 text-sm leading-6">
       <div className="flex align-baseline justify-between flex-wrap">
         {/* <p> */}
         <div className='flex justify-between'>
          <div>文章数:</div>
          <div>{postCount}</div>
        </div>
        <div className='flex justify-between'>
          <div>访客数:</div>
          <div className='busuanzi_value_site_uv' />
        </div>
        {/* </p> */}
        <p className="flex justify-between">
         {/* <Vercel /> */}
         公众号：须臾所思
        </p>
       </div>
     </div>
   </footer>
}
