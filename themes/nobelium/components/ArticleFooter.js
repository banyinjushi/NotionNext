import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'

/**
 * 加密文章校验组件
 * @param {password, validPassword} props
 * @param password 正确的密码
 * @param validPassword(bool) 回调函数，校验正确回调入参为true
 * @returns
 */
export const ArticleFooter = props => {
  const { post } = props
  const router = useRouter()
  const { locale } = useGlobal()

  return <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
  <a>
    <span className="hidden busuanzi_container_page_pv mr-2">
                    <i className='mr-1 fas fa-eye' />阅读
                    &nbsp;
                    <span className="mr-2 busuanzi_value_page_pv" />
                </span>
  </a>
  <a>
    最后修改时间  {post?.lastEditedDay}
  </a>
</div>
}
