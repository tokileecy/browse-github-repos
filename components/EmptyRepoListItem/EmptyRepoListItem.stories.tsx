import React from 'react'
import { Story, Meta } from '@storybook/react'
import EmptyRepoListItem, { EmptyRepoListItemProps } from './EmptyRepoListItem'

export default {
  title: 'components/EmptyRepoListItem',
  component: EmptyRepoListItem,
} as Meta

const Template: Story<EmptyRepoListItemProps> = (args) => {
  return <EmptyRepoListItem {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  search: "I'm a not exist repo keword.",
}
