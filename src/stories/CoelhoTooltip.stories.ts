import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoTooltip from '../components/atoms/CoelhoTooltip.vue'
import CoelhoButton from '../components/atoms/CoelhoButton.vue'

const meta = {
  title: 'Atoms/Tooltip',
  component: CoelhoTooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip position',
    },
    variant: {
      control: 'select',
      options: ['primary', 'dark', 'danger', 'success'],
      description: 'Tooltip color variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tooltip size',
    },
    delay: {
      control: 'number',
      description: 'Delay before showing tooltip (ms)',
    },
  },
} satisfies Meta<typeof CoelhoTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
  },
  render: () => ({
    components: { CoelhoTooltip, CoelhoButton },
    template: `
      <div class="p-16 flex justify-center">
        <CoelhoTooltip content="This is a tooltip">
          <CoelhoButton>Hover me</CoelhoButton>
        </CoelhoTooltip>
      </div>
    `,
  }),
}

export const Positions: Story = {
  args: {
    content: 'Tooltip content',
  },
  render: () => ({
    components: { CoelhoTooltip, CoelhoButton },
    template: `
      <div class="p-16 grid grid-cols-2 gap-8 place-items-center">
        <CoelhoTooltip content="Top tooltip" position="top">
          <CoelhoButton>Top</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Right tooltip" position="right">
          <CoelhoButton>Right</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Bottom tooltip" position="bottom">
          <CoelhoButton>Bottom</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Left tooltip" position="left">
          <CoelhoButton>Left</CoelhoButton>
        </CoelhoTooltip>
      </div>
    `,
  }),
}

export const Variants: Story = {
  args: {
    content: 'Tooltip content',
  },
  render: () => ({
    components: { CoelhoTooltip, CoelhoButton },
    template: `
      <div class="p-16 flex gap-4 justify-center">
        <CoelhoTooltip content="Primary tooltip" variant="primary">
          <CoelhoButton>Primary</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Dark tooltip" variant="dark">
          <CoelhoButton>Dark</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Danger tooltip" variant="danger">
          <CoelhoButton>Danger</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Success tooltip" variant="success">
          <CoelhoButton>Success</CoelhoButton>
        </CoelhoTooltip>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  args: {
    content: 'Tooltip content',
  },
  render: () => ({
    components: { CoelhoTooltip, CoelhoButton },
    template: `
      <div class="p-16 flex gap-4 justify-center">
        <CoelhoTooltip content="Small tooltip" size="sm">
          <CoelhoButton>Small</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Medium tooltip" size="md">
          <CoelhoButton>Medium</CoelhoButton>
        </CoelhoTooltip>
        <CoelhoTooltip content="Large tooltip" size="lg">
          <CoelhoButton>Large</CoelhoButton>
        </CoelhoTooltip>
      </div>
    `,
  }),
}

export const WithDelay: Story = {
  args: {
    content: 'Delayed tooltip',
    delay: 500,
  },
  render: () => ({
    components: { CoelhoTooltip, CoelhoButton },
    template: `
      <div class="p-16 flex justify-center">
        <CoelhoTooltip content="Delayed tooltip" :delay="500">
          <CoelhoButton>Hover for 500ms</CoelhoButton>
        </CoelhoTooltip>
      </div>
    `,
  }),
}
