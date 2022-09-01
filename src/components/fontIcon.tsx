import * as Icon from '@ant-design/icons'
import { createFromIconfontCN } from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import React from 'react'
interface Props {
  name: string
}
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/c/font_3623294_x15o78nn3mj.js',
    '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  ],
  extraCommonProps: { style: 'skyblue' },
})

const FontIcon: React.FC<Props> = ({ name }) => {
  return (
    <>
      {name?.startsWith('icon-') ? (
        <IconFont type={name} style={{ color: 'skyblue' }} />
      ) : (
        // <Icon component={HomeOutlined as React.ForwardRefExoticComponent<any>} />
        React.createElement(Icon[name])
      )}
    </>
  )
}

export default FontIcon
