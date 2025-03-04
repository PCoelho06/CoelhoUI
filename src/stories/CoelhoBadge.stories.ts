import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoBadge from '../components/atoms/CoelhoBadge.vue'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  BellIcon,
  FireIcon,
} from '@heroicons/vue/24/solid'

const meta = {
  title: 'Atoms/Badge',
  component: CoelhoBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Visual style variant',
    },
    type: {
      control: 'select',
      options: ['default', 'counter', 'status', 'dot'],
      description: 'Type of badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    content: {
      control: 'text',
      description: 'Badge content',
    },
    icon: {
      control: 'select',
      options: [
        'CheckCircleIcon',
        'ExclamationCircleIcon',
        'InformationCircleIcon',
        'BellIcon',
        'FireIcon',
      ],
      mapping: {
        CheckCircleIcon,
        ExclamationCircleIcon,
        InformationCircleIcon,
        BellIcon,
        FireIcon,
      },
      description: 'Icon to display',
    },
    count: {
      control: 'number',
      description: 'Counter value',
    },
    max: {
      control: 'number',
      description: 'Maximum counter value before showing +',
    },
    pulse: {
      control: 'boolean',
      description: 'Enable pulse animation',
    },
    rounded: {
      control: 'boolean',
      description: 'Use fully rounded corners',
    },
  },
} satisfies Meta<typeof CoelhoBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Badge',
    variant: 'primary',
  },
}

export const Variants: Story = {
  render: () => ({
    components: { CoelhoBadge },
    template: `
      <div class="flex gap-2">
        <CoelhoBadge content="Primary" variant="primary" />
        <CoelhoBadge content="Secondary" variant="secondary" />
        <CoelhoBadge content="Success" variant="success" />
        <CoelhoBadge content="Danger" variant="danger" />
        <CoelhoBadge content="Warning" variant="warning" />
        <CoelhoBadge content="Info" variant="info" />
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { CoelhoBadge },
    setup() {
      return {
        CheckCircleIcon,
        ExclamationCircleIcon,
        InformationCircleIcon,
      }
    },
    template: `
      <div class="flex gap-2">
        <CoelhoBadge content="Success" variant="success" :icon="CheckCircleIcon" />
        <CoelhoBadge content="Warning" variant="warning" :icon="ExclamationCircleIcon" />
        <CoelhoBadge content="Info" variant="info" :icon="InformationCircleIcon" />
      </div>
    `,
  }),
}

export const Counter: Story = {
  render: () => ({
    components: { CoelhoBadge },
    template: `
      <div class="flex gap-4">
        <CoelhoBadge type="counter" :count="5" variant="primary" />
        <CoelhoBadge type="counter" :count="99" variant="danger" />
        <CoelhoBadge type="counter" :count="150" variant="primary" :max="99" />
      </div>
    `,
  }),
}

export const Status: Story = {
  render: () => ({
    components: { CoelhoBadge },
    template: `
      <div class="flex gap-2">
        <CoelhoBadge type="status" content="Active" variant="success" :pulse="true" />
        <CoelhoBadge type="status" content="Pending" variant="warning" />
        <CoelhoBadge type="status" content="Offline" variant="danger" />
      </div>
    `,
  }),
}

export const NotificationDots: Story = {
  render: () => ({
    components: { CoelhoBadge, BellIcon },
    template: `
      <div class="flex gap-8">
        <div class="relative inline-flex">
          <BellIcon class="h-6 w-6" />
          <CoelhoBadge type="dot" variant="danger" class="absolute -top-1 -right-1" />
        </div>
        <div class="relative inline-flex">
          <BellIcon class="h-6 w-6" />
          <CoelhoBadge type="dot" variant="success" class="absolute -top-1 -right-1" pulse />
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { CoelhoBadge },
    template: `
      <div class="flex items-center gap-2">
        <CoelhoBadge content="Small" size="sm" />
        <CoelhoBadge content="Medium" size="md" />
        <CoelhoBadge content="Large" size="lg" />
      </div>
    `,
  }),
}

export const Rounded: Story = {
  render: () => ({
    components: { CoelhoBadge },
    template: `
      <div class="flex gap-2">
        <CoelhoBadge content="Default" />
        <CoelhoBadge content="Rounded" :rounded="true" />
      </div>
    `,
  }),
}
