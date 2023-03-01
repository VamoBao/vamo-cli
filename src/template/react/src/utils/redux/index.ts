import { configureStore } from '@reduxjs/toolkit'
import homeDataReducer from 'pages/home-data/home-data.reducer'

/** 创建redux store */
const store = configureStore({
  reducer: {
    homeData: homeDataReducer
  }
})

/** redux state类型 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
