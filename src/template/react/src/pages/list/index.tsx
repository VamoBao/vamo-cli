import React, { type FC } from 'react'
import { Table, Button, type TableColumnType } from 'antd'
import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks'
import { addAny } from 'pages/home-data/home-data.reducer'
import { shallowEqual } from 'react-redux'

const List: FC = () => {
  const { count } = useAppSelector(({ homeData }) => ({
    count: homeData.count
  }), shallowEqual)

  const dispatch = useAppDispatch()

  /** 表格定义 */
  const columns: Array<TableColumnType<any>> = [
    {
      title: '序号',
      render: (value, record, index) => index + 1
    },
    {
      title: 'item1',
      dataIndex: 'id'
    },
    {
      title: 'item2',
      dataIndex: 'id'
    }, {
      title: 'item3',
      dataIndex: 'id'
    }
  ]

  return <>
    <Table
      columns={columns}
      key='id'
      bordered
      dataSource={[{ id: '123' }, { id: '123' }, { id: '123' }]}
    />
    <p>{count}</p>
    <Button onClick={() => dispatch(addAny(2))}>+2</Button>
  </>
}

export default List
