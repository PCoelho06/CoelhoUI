import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoInputGroup from '../components/molecules/CoelhoInputGroup.vue'
import {
  UserIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/solid'

const meta = {
  title: 'Molecules/InputGroup',
  component: CoelhoInputGroup,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Input value',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    prefix: {
      control: 'object',
      description: 'Prefix icon component',
    },
    suffix: {
      control: 'object',
      description: 'Suffix icon component',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    helper: {
      control: 'text',
      description: 'Helper text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    action: {
      control: 'boolean',
      description: 'Show action button',
    },
    actionLabel: {
      control: 'text',
      description: 'Action button label',
    },
    actionIcon: {
      control: 'object',
      description: 'Action button icon',
    },
    actionVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Action button variant',
    },
  },
} satisfies Meta<typeof CoelhoInputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const WithIcons: Story = {
  args: {
    modelValue: '',
    label: 'Username',
    placeholder: 'Enter your username',
  },
  render: () => ({
    components: { CoelhoInputGroup },
    setup() {
      const value = ref('')
      return {
        value,
        UserIcon,
        EnvelopeIcon,
      }
    },
    template: `
      <div class="space-y-4">
        <CoelhoInputGroup
          v-model="value"
          label="Username"
          :prefix="UserIcon"
          placeholder="Enter your username"
        />
        <CoelhoInputGroup
          v-model="value"
          label="Email"
          :prefix="EnvelopeIcon"
          placeholder="Enter your email"
        />
      </div>
    `,
  }),
}

export const WithAction: Story = {
  args: {
    modelValue: '',
    label: 'Search',
    action: true,
    actionLabel: 'Search',
    placeholder: 'Search...',
  },
  render: () => ({
    components: { CoelhoInputGroup },
    setup() {
      const value = ref('')
      return {
        value,
        MagnifyingGlassIcon,
      }
    },
    template: `
      <CoelhoInputGroup
        v-model="value"
        label="Search"
        :prefix="MagnifyingGlassIcon"
        action
        actionLabel="Search"
        placeholder="Search..."
        @action="() => alert('Search clicked!')"
      />
    `,
  }),
}

export const WithValidation: Story = {
  args: {
    modelValue: '',
    label: 'Username',
    placeholder: 'Enter your username',
    error: 'This field is required',
  },
  render: () => ({
    components: { CoelhoInputGroup },
    setup() {
      const value = ref('')
      const error = ref('This field is required')
      return {
        value,
        error,
        UserIcon,
      }
    },
    template: `
      <CoelhoInputGroup
        v-model="value"
        label="Username"
        :prefix="UserIcon"
        :error="error"
        placeholder="Enter your username"
      />
    `,
  }),
}

export const PasswordInput: Story = {
  args: {
    modelValue: '',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
  render: () => ({
    components: { CoelhoInputGroup },
    setup() {
      const value = ref('')
      const showPassword = ref(false)
      return {
        value,
        showPassword,
        LockClosedIcon,
        EyeIcon,
        EyeSlashIcon,
      }
    },
    template: `
      <CoelhoInputGroup
        v-model="value"
        label="Password"
        :prefix="LockClosedIcon"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Enter your password"
      >
        <template #suffix>
          <button
            type="button"
            class="focus:outline-none"
            @click="showPassword = !showPassword"
          >
            <component :is="showPassword ? EyeSlashIcon : EyeIcon" class="h-5 w-5 text-gray-500" />
          </button>
        </template>
      </CoelhoInputGroup>
    `,
  }),
}

export const WithCustomContent: Story = {
  args: {
    modelValue: '',
    label: 'Price',
    placeholder: '0.00',
  },
  render: () => ({
    components: { CoelhoInputGroup },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <CoelhoInputGroup
        v-model="value"
        label="Price"
        placeholder="0.00"
      >
        <template #prefix>$</template>
        <template #suffix>USD</template>
      </CoelhoInputGroup>
    `,
  }),
}
