import { Button, DatePicker } from 'antd'
import styles from './detail.module.less'

function DetailPage() {
  return (
    <div className={styles.root}>
      <Button
        type="primary"
        onClick={() => { console.log(1) }}
      >
        Demo
      </Button>
      <a href="" />
      <DatePicker />
    </div>
  )
}
export default DetailPage
