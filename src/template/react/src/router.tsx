import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const App = lazy(async () => await import(/* webpackChunkName:'app' */'@/App'))
const HomeData = lazy(async () => await import(/* webpackChunkName:'home-data' */'pages/home-data'))
const List = lazy(async () => await import(/* webpackChunkName:'home-list' */'pages/list'))
const NotFound = lazy(async () => await import(/* webpackChunkName:'not-found' */'pages/404'))

const createLazyElement = (element: any): JSX.Element => {
  return (
    <Suspense>
      {element}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: createLazyElement(<App />),
    children: [
      {
        path: 'home/data',
        element: createLazyElement(<HomeData />)
      },
      {
        path: 'home/list',
        element: createLazyElement(<List />)
      },
      {
        path: '*',
        element: createLazyElement(<NotFound />)
      }
    ]
  }
])

export default router
