import React from 'react'
import { Story, Meta } from '@storybook/react'
import SkeletonRepoListItem, {
  SkeletonRepoListItemProps,
} from './SkeletonRepoListItem'

export default {
  title: 'components/SkeletonRepoListItem',
  component: SkeletonRepoListItem,
} as Meta

const Template: Story<SkeletonRepoListItemProps> = (args) => {
  return <SkeletonRepoListItem {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  hidden: false,
}

export const Hide = Template.bind({})

Hide.args = {
  hidden: true,
}
