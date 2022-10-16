import React, { useEffect, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import SearchInput, { SearchInputProps } from './SearchInput'

export default {
  title: 'components/SearchInput',
  component: SearchInput,
} as Meta

const Template: Story<SearchInputProps> = (args) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(args.value ?? '')
  }, [args.value])

  const handleChange: SearchInputProps['onChange'] = (e) => {
    setValue(e.target.value)
  }

  return <SearchInput {...args} value={value} onChange={handleChange} />
}

export const Normal = Template.bind({})

Normal.args = {
  value: 'react',
}
