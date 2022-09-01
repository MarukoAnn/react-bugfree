import { useState } from 'react'
import FontIcon from '@/components/fontIcon'
import { Breadcrumb } from 'antd'
interface Props {
  icon: string
  onIconClick: () => void
}
let styles = {
  headers: {
    display: 'flex',
    alignItems: 'center',
  },
  bread: {
    marginLeft: '10px',
  },
}
const HeaderView: React.FC<Props> = ({ icon, onIconClick }) => {
  return (
    <div style={styles.headers}>
      <span onClick={() => onIconClick()}>
        <FontIcon name={icon} />
      </span>
      <div style={styles.bread}>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default HeaderView
