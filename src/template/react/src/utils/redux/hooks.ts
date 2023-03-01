import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import { type RootState, type AppDispatch } from './index'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
