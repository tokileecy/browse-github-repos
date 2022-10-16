import React from 'react'
import { Story, Meta } from '@storybook/react'
import ErrorRepoListItem, { ErrorRepoListItemProps } from './ErrorRepoListItem'

export default {
  title: 'components/ErrorRepoListItem',
  component: ErrorRepoListItem,
} as Meta

const Template: Story<ErrorRepoListItemProps> = (args) => {
  return <ErrorRepoListItem {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  error: 'test error message',
}
