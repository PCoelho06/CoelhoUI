import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoSpinner from '../components/atoms/CoelhoSpinner.vue'

const meta = {
  title: 'Atoms/Spinner',
  component: CoelhoSpinner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots', 'linear'],
      description: 'Type of loading indicator',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
    },
    color: {
      control: 'text',
      description: 'Color of the spinner (Tailwind class or color name)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label',
    },
  },
} satisfies Meta<typeof CoelhoSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'spinner',
    size: 'md',
    color: 'primary',
  },
}

export const Types: Story = {
  render: () => ({
    components: { CoelhoSpinner },
    template: `
      <div class="flex items-center gap-8">
        <div class="text-center">
          <CoelhoSpinner type="spinner" />
          <p class="mt-2 text-sm">Spinner</p>
        </div>
        <div class="text-center">
          <CoelhoSpinner type="dots" />
          <p class="mt-2 text-sm">Dots</p>
        </div>
        <div class="text-center w-32">
          <CoelhoSpinner type="linear" />
          <p class="mt-2 text-sm">Linear</p>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { CoelhoSpinner },
    template: `
      <div>
        <div class="mb-8 flex items-center gap-4">
          <CoelhoSpinner type="spinner" size="sm" />
          <CoelhoSpinner type="spinner" size="md" />
          <CoelhoSpinner type="spinner" size="lg" />
          <CoelhoSpinner type="spinner" size="xl" />
        </div>
        <div class="mb-8 flex items-center gap-4">
          <CoelhoSpinner type="dots" size="sm" />
          <CoelhoSpinner type="dots" size="md" />
          <CoelhoSpinner type="dots" size="lg" />
          <CoelhoSpinner type="dots" size="xl" />
        </div>
        <div class="flex flex-col gap-4">
          <div class="w-32">
            <CoelhoSpinner type="linear" size="sm" />
          </div>
          <div class="w-32">
            <CoelhoSpinner type="linear" size="md" />
          </div>
          <div class="w-32">
            <CoelhoSpinner type="linear" size="lg" />
          </div>
          <div class="w-32">
            <CoelhoSpinner type="linear" size="xl" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { CoelhoSpinner },
    template: `
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-4">
          <CoelhoSpinner color="primary" />
          <CoelhoSpinner color="secondary" />
          <CoelhoSpinner color="success" />
          <CoelhoSpinner color="danger" />
          <CoelhoSpinner color="warning" />
          <div class="p-2 bg-primary rounded">
            <CoelhoSpinner color="white" />
          </div>
        </div>
        <div class="flex items-center gap-4">
          <CoelhoSpinner type="dots" color="primary" />
          <CoelhoSpinner type="dots" color="secondary" />
          <CoelhoSpinner type="dots" color="success" />
          <CoelhoSpinner type="dots" color="danger" />
          <CoelhoSpinner type="dots" color="warning" />
          <div class="p-2 bg-primary rounded">
            <CoelhoSpinner type="dots" color="white" />
          </div>
        </div>
        <div class="flex items-center gap-4">
          <CoelhoSpinner type="linear" color="primary" />
          <CoelhoSpinner type="linear" color="secondary" />
          <CoelhoSpinner type="linear" color="success" />
          <CoelhoSpinner type="linear" color="danger" />
          <CoelhoSpinner type="linear" color="warning" />
        </div>
      </div>
    `,
  }),
}
