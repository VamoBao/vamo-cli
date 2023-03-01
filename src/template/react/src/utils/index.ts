/**
 * 根据分页信息计算table列表数据的实际序号
 * @param page 当前页
 * @param pageSize 每页显示数据量
 * @param index antd table column定义render函数返回的index
 * @returns 序号
 */
export function calculateIndex (page: number, pageSize: number, index: number) {
  return (page - 1) * pageSize + index + 1
}

export default {}
