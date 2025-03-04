import type { Meta, StoryObj } from '@storybook/vue3'

import CoelhoButton from '../components/atoms/CoelhoButton.vue'

const meta = {
  title: 'Atoms/Button',
  component: CoelhoButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML type attribute',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof CoelhoButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Primary Button</CoelhoButton>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Secondary Button</CoelhoButton>',
  }),
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Tertiary Button</CoelhoButton>',
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Danger Button</CoelhoButton>',
  }),
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Success Button</CoelhoButton>',
  }),
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Small Button</CoelhoButton>',
  }),
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Medium Button</CoelhoButton>',
  }),
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Large Button</CoelhoButton>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Disabled Button</CoelhoButton>',
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { CoelhoButton },
    setup() {
      return { args }
    },
    template: '<CoelhoButton v-bind="args">Loading Button</CoelhoButton>',
  }),
}
