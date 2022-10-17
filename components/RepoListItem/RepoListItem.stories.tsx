import React from 'react'
import { Story, Meta } from '@storybook/react'
import RepoListItem, { RepoListItemProps } from './RepoListItem'

export default {
  title: 'components/RepoListItem',
  component: RepoListItem,
} as Meta

const Template: Story<RepoListItemProps> = (args) => {
  return <RepoListItem {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  fullName: '@my-org/my-repo',
  description: 'my test repo',
  stargazersCount: 1200,
  language: 'Typescript',
  license: 'MIT',
  pushedAt: '2022-10-16T09:40:49Z',
  issue: 120,
  topics: ['react', 'storybook', 'Typescript'],
}

export const PushedAtIsNotDateString = Template.bind({})

PushedAtIsNotDateString.args = {
  fullName: '@my-org/my-repo',
  description: 'my test repo',
  stargazersCount: 1200,
  language: 'Typescript',
  license: 'MIT',
  pushedAt: 'not date string',
  issue: 120,
  topics: ['react', 'storybook', 'Typescript'],
}

export const LackData = Template.bind({})

LackData.args = {
  fullName: '@my-org/my-repo',
}
