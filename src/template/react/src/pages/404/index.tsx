import React, { type FC } from 'react'
import { Result } from 'antd'

const NotFoundPage: FC = () => {
  return <>
    <Result
      status='404'
      title='404'
      subTitle='您访问的页面不存在'
    />
  </>
}

export default NotFoundPage
