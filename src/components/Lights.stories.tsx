import type { Meta, StoryObj } from '@storybook/react';

import Lights from './Lights';

const meta: Meta<typeof Lights> = {
  component: Lights,
  title: 'Cool/Lights',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['green', 'yellow', 'red']
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    variant: 'yellow'
  }
}

/** Sets background to red */
export const Red: Story = {
  args: {
    variant: 'red',
    small: false
  }
}

export const Green: Story = {
  args: {
    variant: 'green',
    width: 100
  }
}

export const Another: Story = {
  args: {
    variant: 'red',
    width: 50
  },
  render: (args) => <Lights {...args} />
}

export const Grouped: Story = {
  render: () => (
    <div>
      <Lights variant="red" />
      <Lights variant="yellow" />
      <Lights variant="green" />
    </div>
  )
}