import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoCheckbox from '../components/atoms/CoelhoCheckbox.vue'

const meta = {
  title: 'Atoms/Checkbox',
  component: CoelhoCheckbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'switch'],
      description: 'The visual style of the checkbox',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
    },
    modelValue: {
      control: 'boolean',
      description: 'The checked state of the checkbox',
    },
  },
  args: {
    variant: 'standard',
    disabled: false,
    indeterminate: false,
    modelValue: false,
  },
} satisfies Meta<typeof CoelhoCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    label: 'Standard Checkbox',
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}

export const StandardChecked: Story = {
  args: {
    label: 'Checked Checkbox',
    modelValue: true,
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref(true)
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}

export const StandardDisabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}

export const StandardIndeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref()
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}

export const Switch: Story = {
  args: {
    label: 'Switch',
    variant: 'switch',
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}

export const SwitchChecked: Story = {
  args: {
    label: 'Checked Switch',
    variant: 'switch',
    modelValue: true,
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref(true)
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}

export const SwitchDisabled: Story = {
  args: {
    label: 'Disabled Switch',
    variant: 'switch',
    disabled: true,
  },
  render: (args) => ({
    components: { CoelhoCheckbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div style="width: 300px;">
        <CoelhoCheckbox v-bind="args" v-model="checked"/>
      </div>
    `,
  }),
}
