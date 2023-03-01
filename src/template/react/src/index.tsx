import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ConfigProvider } from 'antd'
import 'assets/style/utils.less'
import 'assets/style/index.less'
import zh_CN from 'antd/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import store from './utils/redux'
import { Provider } from 'react-redux'
// 引入dayjs中文，解决datepicker等星期、月显示英文
import 'dayjs/locale/zh-cn'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zh_CN}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
)
reportWebVitals()
