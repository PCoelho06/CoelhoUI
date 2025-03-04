import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoSelect from '../components/atoms/CoelhoSelect.vue'

const meta = {
  title: 'Atoms/Select',
  component: CoelhoSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Selected value(s)',
    },
    options: {
      control: 'object',
      description: 'Array of select options',
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
      description: 'Whether the select is disabled',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple selection is allowed',
    },
    searchable: {
      control: 'boolean',
      description: 'Whether the select is searchable',
    },
  },
} satisfies Meta<typeof CoelhoSelect>

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
]

export const Default: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: 'Basic Select',
  },
  render: () => ({
    components: { CoelhoSelect },
    setup() {
      const selected = ref('')
      return {
        selected,
        options: defaultOptions,
      }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoSelect
          v-model="selected"
          :options="options"
          label="Basic Select"
        />
        <div class="mt-4">Selected value: {{ selected }}</div>
      </div>
    `,
  }),
}

export const Multiple: Story = {
  args: {
    modelValue: [],
    options: defaultOptions,
    label: 'Multiple Select',
    multiple: true,
  },
  render: () => ({
    components: { CoelhoSelect },
    setup() {
      const selected = ref([])
      return {
        selected,
        options: defaultOptions,
      }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoSelect
          v-model="selected"
          :options="options"
          label="Multiple Select"
          multiple
        />
        <div class="mt-4">Selected values: {{ selected }}</div>
      </div>
    `,
  }),
}

export const Searchable: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: 'Searchable Select',
    searchable: true,
  },
  render: () => ({
    components: { CoelhoSelect },
    setup() {
      const selected = ref('')
      return {
        selected,
        options: defaultOptions,
      }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoSelect
          v-model="selected"
          :options="options"
          label="Searchable Select"
          searchable
        />
        <div class="mt-4">Selected value: {{ selected }}</div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: 'Disabled Select',
    disabled: true,
  },
  render: () => ({
    components: { CoelhoSelect },
    setup() {
      const selected = ref('')
      return {
        selected,
        options: defaultOptions,
      }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoSelect
          v-model="selected"
          :options="options"
          label="Disabled Select"
          disabled
        />
      </div>
    `,
  }),
}

export const WithPlaceholder: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: 'Select with Placeholder',
    placeholder: 'Choose an option...',
  },
  render: () => ({
    components: { CoelhoSelect },
    setup() {
      const selected = ref('')
      return {
        selected,
        options: defaultOptions,
      }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoSelect
          v-model="selected"
          :options="options"
          label="Select with Placeholder"
          placeholder="Choose an option..."
        />
      </div>
    `,
  }),
}
