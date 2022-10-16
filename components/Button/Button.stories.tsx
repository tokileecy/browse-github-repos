import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  children: 'button',
}
