import React, { type FC } from 'react'
import styles from './App.module.less'
import { Layout, type MenuProps, Row, Col, Avatar, Space, Dropdown, Button } from 'antd'
import { HomeOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import SiderMenu from 'components/sider-menu'

const { Sider, Header, Content, Footer } = Layout

const App: FC = () => {
  /** 目录项配置 */
  const items: MenuProps['items'] = [
    {
      icon: <HomeOutlined />,
      key: 'home',
      label: '首页',
      children: [{
        key: 'data',
        label: '数据'
      }, {
        key: 'list',
        label: '列表'
      }]
    }, {
      icon: <SettingOutlined />,
      key: 'setting',
      label: '系统设置'
    }
  ]

  /** 用户名溢出菜单项 */
  const dropDownItems: MenuProps['items'] = [
    {
      key: 'help',
      label: '帮助文档'
    },
    {
      key: 'logout',
      danger: true,
      label: '注销'
    }
  ]

  return (
    <div className={classNames(styles.app, 'whole-height')}>
      <Layout className='whole-height'>
        {/* 目录 */}
        <Sider
          className='pdt-60'
          collapsible
          breakpoint='lg'
        >
          <SiderMenu
            items={items}
            defaultOpenKeys={['home']}
            defaultSelectedKeys={['data']}
          />
        </Sider>
        <Layout className='whole-height'>
          {/* 顶部条 */}
          <Header>
            <Row className='whole-height' align='middle' justify='end'>
              <Col>
                <Space >
                  {/* 用户头像 */}
                  <Avatar size={32} className={styles.user}>User</Avatar>
                  {/* 用户名溢出菜单 */}
                  <Dropdown menu={{ items: dropDownItems }}>
                    <Space>
                      <Button type='link' size='small'>用户名<DownOutlined /></Button>
                    </Space>
                  </Dropdown>
                </Space>
              </Col>
            </Row>
          </Header>
          {/* 主内容区域 */}
          <Content className='pd-16'>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  )
}

export default App
