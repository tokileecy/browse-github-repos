import React from 'react'
import { Story, Meta } from '@storybook/react'
import LineSkeleton, { LineSkeletonProps } from './LineSkeleton'

export default {
  title: 'components/LineSkeleton',
  component: LineSkeleton,
} as Meta

const Template: Story<LineSkeletonProps> = (args) => {
  return <LineSkeleton {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  width: '50%',
}
