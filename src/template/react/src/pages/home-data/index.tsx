import React, { type FC } from 'react'
import { DatePicker, Button, Space } from 'antd'
import { useAppSelector, useAppDispatch } from '@/utils/redux/hooks'
import { shallowEqual } from 'react-redux'
import { add, reset } from './home-data.reducer'

const HomeData: FC = () => {
  const { count } = useAppSelector(({ homeData }) => ({
    count: homeData.count
  }), shallowEqual)

  const dispatch = useAppDispatch()

  return (
    <>
      <Space>
        <DatePicker />
        <Button type='primary'>Submit</Button>
      </Space>
      <p>{count}</p>
      <Space>
        <Button onClick={() => { dispatch(add()) }}>+</Button>
        <Button onClick={() => { dispatch(reset()) }}>reset</Button>
      </Space>
    </>
  )
}

export default HomeData
