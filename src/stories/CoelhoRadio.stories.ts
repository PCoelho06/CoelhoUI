import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoRadio from '../components/atoms/CoelhoRadio.vue'

const meta = {
  title: 'Atoms/Radio',
  component: CoelhoRadio,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of radio options',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    modelValue: {
      control: 'text',
      description: 'Currently selected value',
    },
    name: {
      control: 'text',
      description: 'Name of the radio group',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of radio buttons',
    },
  },
} satisfies Meta<typeof CoelhoRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'default',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  render: (args) => ({
    components: { CoelhoRadio },
    setup() {
      const selected = ref('option1')
      return { selected, args }
    },
    template: `
      <div>
        <CoelhoRadio
          v-model="selected"
          v-bind="args"
        />
        <div class="mt-4">Selected value: {{ selected }}</div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    name: 'default',
    disabled: true,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  render: (args) => ({
    components: { CoelhoRadio },
    setup() {
      const selected = ref('option1')
      return { selected, args }
    },
    template: `
      <div>
        <CoelhoRadio
          v-model="selected"
          v-bind="args"
        />
        <div class="mt-4">Selected value: {{ selected }}</div>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  args: {
    name: 'horizontal',
    direction: 'vertical',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  render: (args) => ({
    components: { CoelhoRadio },
    setup() {
      const selected = ref('option1')
      return { selected, args }
    },
    template: `
      <div>
        <CoelhoRadio
          v-model="selected"
          v-bind="args"
        />
        <div class="mt-4">Selected value: {{ selected }}</div>
      </div>
    `,
  }),
}
