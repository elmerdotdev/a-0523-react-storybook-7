import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/test'

import FormDemo from './Form'

const meta: Meta<typeof FormDemo> = {
  component: FormDemo,
  title: 'Cool/Form'
}

export default meta

type Story = StoryObj<typeof meta>

export const ElementsExist: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // const submitBtn = canvas.getByText('Post question')
    const email = canvas.getByLabelText(/email/i)
    const question = canvas.getByLabelText(/question/i)
    const submitBtn = canvas.getByRole('button', {
      name: /post/i
    })

    await expect(email).toBeInTheDocument()
    await expect(question).toBeInTheDocument()
    await expect(submitBtn).toBeInTheDocument()
  }
}

export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const submitBtn = canvas.getByRole('button', {
      name: /post/i
    })
    
    await userEvent.click(submitBtn)

    await expect(canvas.getByText(/enter your email/i)).toBeInTheDocument()
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument()
  }
}

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const email = canvas.getByLabelText(/email/i)
    const submitBtn = canvas.getByRole('button', {
      name: /post/i
    })
    
    await userEvent.type(email, 'some-invalid-email-address')
    await userEvent.click(submitBtn)

    await expect(canvas.getByText(/provide a valid email/i)).toBeInTheDocument()
  }
}

export const ValidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const email = canvas.getByLabelText(/email/i)
    const submitBtn = canvas.getByRole('button', {
      name: /post/i
    })
    
    await userEvent.type(email, 'elmer.ciccc@gmail.com')
    await userEvent.click(submitBtn)

    await expect(canvas.queryByText(/provide a valid email/i)).not.toBeInTheDocument()
    await expect(canvas.queryByText(/enter your email/i)).not.toBeInTheDocument()
  }
}

export const ValidInputs: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const email = canvas.getByLabelText(/email/i)
    const question = canvas.getByLabelText(/question/i)
    const submitBtn = canvas.getByRole('button', { name: /post/i })
    
    await userEvent.type(email, 'elmer.ciccc@gmail.com')
    await userEvent.type(question, 'Did you finish your groceries today?')
    await userEvent.click(submitBtn)

    await expect(canvas.queryByText(/provide a valid email/i)).not.toBeInTheDocument()
    await expect(canvas.queryByText(/enter your email/i)).not.toBeInTheDocument()
    await expect(canvas.queryByText(/enter a question/i)).not.toBeInTheDocument()
  }
}