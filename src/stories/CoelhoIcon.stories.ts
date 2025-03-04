import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoIcon from '../components/atoms/CoelhoIcon.vue'
import { HomeIcon, UserIcon, CogIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/vue/24/solid'

const meta = {
  title: 'Atoms/Icon',
  component: CoelhoIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['HomeIcon', 'UserIcon', 'CogIcon', 'ArrowRightIcon', 'SparklesIcon'],
      mapping: {
        HomeIcon,
        UserIcon,
        CogIcon,
        ArrowRightIcon,
        SparklesIcon,
      },
      description: 'Icon component to render',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 24],
      description: 'Size of the icon',
    },
    color: {
      control: 'text',
      description: 'Color of the icon (Tailwind class or hex)',
    },
    rotation: {
      control: 'number',
      description: 'Rotation angle in degrees',
    },
    spin: {
      control: 'boolean',
      description: 'Whether the icon should spin',
    },
  },
} satisfies Meta<typeof CoelhoIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: HomeIcon,
    size: 'md',
  },
}

export const Sizes: Story = {
  args: {
    icon: HomeIcon,
  },
  render: () => ({
    components: { CoelhoIcon },
    setup() {
      return { HomeIcon }
    },
    template: `
      <div class="flex items-center gap-4">
        <CoelhoIcon :icon="HomeIcon" size="xs" />
        <CoelhoIcon :icon="HomeIcon" size="sm" />
        <CoelhoIcon :icon="HomeIcon" size="md" />
        <CoelhoIcon :icon="HomeIcon" size="lg" />
        <CoelhoIcon :icon="HomeIcon" size="xl" />
        <CoelhoIcon :icon="HomeIcon" :size="24" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  args: {
    icon: HomeIcon,
  },
  render: () => ({
    components: { CoelhoIcon },
    setup() {
      return { HomeIcon }
    },
    template: `
      <div class="flex items-center gap-4">
        <CoelhoIcon :icon="HomeIcon" color="text-primary" />
        <CoelhoIcon :icon="HomeIcon" color="text-red-500" />
        <CoelhoIcon :icon="HomeIcon" color="text-green-500" />
        <CoelhoIcon :icon="HomeIcon" color="#6366f1" />
      </div>
    `,
  }),
}

export const Rotations: Story = {
  args: {
    icon: ArrowRightIcon,
  },
  render: () => ({
    components: { CoelhoIcon },
    setup() {
      return { ArrowRightIcon }
    },
    template: `
      <div class="flex items-center gap-4">
        <CoelhoIcon :icon="ArrowRightIcon" :rotation="0" />
        <CoelhoIcon :icon="ArrowRightIcon" :rotation="45" />
        <CoelhoIcon :icon="ArrowRightIcon" :rotation="90" />
        <CoelhoIcon :icon="ArrowRightIcon" :rotation="180" />
        <CoelhoIcon :icon="ArrowRightIcon" :rotation="270" />
      </div>
    `,
  }),
}

export const Spinning: Story = {
  args: {
    icon: SparklesIcon,
    spin: true,
  },
}

export const AllIcons: Story = {
  args: {
    icon: HomeIcon,
  },
  render: () => ({
    components: { CoelhoIcon },
    setup() {
      return {
        icons: {
          HomeIcon,
          UserIcon,
          CogIcon,
          ArrowRightIcon,
          SparklesIcon,
        },
      }
    },
    template: `
      <div class="grid grid-cols-5 gap-4">
        <div v-for="(icon, name) in icons" :key="name" class="flex flex-col items-center gap-2">
          <CoelhoIcon :icon="icon" size="lg" />
          <span class="text-sm">{{ name }}</span>
        </div>
      </div>
    `,
  }),
}
