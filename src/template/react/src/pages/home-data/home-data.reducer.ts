import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface HomeDataState {
  count: number
}

/** 初始state */
const initialState: HomeDataState = {
  count: 0
}

const homeDataSlice = createSlice({
  name: 'home-data',
  initialState,
  reducers: {
    add: state => {
      state.count += 1
    },
    addAny: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    reset: state => { state.count = 0 }
  }
})

export const { add, addAny, reset } = homeDataSlice.actions

export default homeDataSlice.reducer
