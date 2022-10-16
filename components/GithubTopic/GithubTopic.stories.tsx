import React from 'react'
import { Story, Meta } from '@storybook/react'
import GithubTopic, { GithubTopicProps } from './GithubTopic'

export default {
  title: 'components/GithubTopic',
  component: GithubTopic,
} as Meta

const Template: Story<GithubTopicProps> = (args) => {
  return <GithubTopic {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  children: 'react',
}
