import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoInput from '../components/atoms/CoelhoInput.vue'
import {
  MagnifyingGlassIcon as SearchIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/solid'

const meta = {
  title: 'Atoms/Input',
  component: CoelhoInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password', 'search'],
      description: 'Type of input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    success: {
      control: 'text',
      description: 'Success message',
    },
    helperText: {
      control: 'text',
      description: 'Helper text',
    },
    modelValue: {
      control: 'text',
      description: 'Input value',
    },
  },
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof CoelhoInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
}

export const WithIcon: Story = {
  args: {
    leftIcon: SearchIcon,
    placeholder: 'Search...',
  },
}

export const WithError: Story = {
  args: {
    error: 'This field is required',
    rightIcon: ExclamationCircleIcon,
  },
}

export const WithSuccess: Story = {
  args: {
    success: 'Valid input',
    rightIcon: CheckCircleIcon,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: 'Disabled input',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  render: (args) => ({
    components: { CoelhoInput },
    setup() {
      const password = ref('')
      return { args, password }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoInput v-bind="args" v-model="password"/>
      </div>
    `,
  }),
}
