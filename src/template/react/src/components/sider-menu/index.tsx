import React, { type FC } from 'react'
import { Menu, type MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

interface SiderMenuProps extends MenuProps {
  /** 目录项 */
  items: MenuProps['items']
}

/** 目录组件 */
const SiderMenu: FC<SiderMenuProps> = (props) => {
  const { items, ...rest } = props

  const navigate = useNavigate()

  return (
    <Menu
      items={items}
      mode='inline'
      theme='dark'
      onClick={({ keyPath }) => {
        const stack = [...keyPath]
        /** 拼装url */
        let path = ''
        while (stack.length > 0) {
          const curPath = stack.pop()
          if (curPath !== undefined) {
            path = `${path}/${curPath}`
          }
        }
        // 路由跳转
        navigate(path)
      }}
      {...rest}
    />
  )
}

export default SiderMenu
