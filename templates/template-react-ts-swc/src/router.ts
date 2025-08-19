import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

const App = lazy(() => import(/* webpackChunkName:"app" */'./App'))
const DetailPage = lazy(() => import(/* webpackChunkName:"detail" */'pages/detail'))

export default createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/detail',
    Component: DetailPage,
  },
])
