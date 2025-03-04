import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CoelhoRating from '../components/molecules/CoelhoRating.vue'

const meta = {
  title: 'Molecules/Rating',
  component: CoelhoRating,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number',
      description: 'Valeur actuelle',
    },
    maxStars: {
      control: 'number',
      description: "Nombre maximum d'étoiles",
    },
    allowHalf: {
      control: 'boolean',
      description: 'Autoriser les demi-étoiles',
    },
    readonly: {
      control: 'boolean',
      description: 'Mode lecture seule',
    },
    disabled: {
      control: 'boolean',
      description: 'État désactivé',
    },
    showValue: {
      control: 'boolean',
      description: 'Afficher la valeur numérique',
    },
    color: {
      control: 'select',
      options: ['primary', 'warning', 'success'],
      description: 'Couleur des étoiles',
    },
  },
} satisfies Meta<typeof CoelhoRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: 0,
  },
  render: () => ({
    components: { CoelhoRating },
    setup(args) {
      const value = ref(3)
      return { value, args }
    },
    template: `
      <CoelhoRating v-model="value" />
    `,
  }),
}

export const WithHalfStars: Story = {
  args: {
    modelValue: 3.5,
    allowHalf: true,
    showValue: true,
  },
  render: () => ({
    components: { CoelhoRating },
    setup(args) {
      const value = ref(3.5)
      return { value, args }
    },
    template: `
      <CoelhoRating v-model="value" v-bind="args" />
    `,
  }),
}

export const ReadOnly: Story = {
  args: {
    modelValue: 0,
  },
  render: () => ({
    components: { CoelhoRating },
    setup(args) {
      const firstValue = ref(4.5)
      const secondValue = ref(3)
      const thirdValue = ref(2.5)
      return { firstValue, secondValue, thirdValue, args }
    },
    template: `
      <div class="space-y-4">
        <CoelhoRating :model-value="firstValue" readonly />
        <CoelhoRating :model-value="secondValue" readonly />
        <CoelhoRating :model-value="thirdValue" readonly />
      </div>
    `,
  }),
}

export const CustomColors: Story = {
  args: {
    modelValue: 0,
  },
  render: () => ({
    components: { CoelhoRating },
    setup(args) {
      const firstValue = ref(4.5)
      const secondValue = ref(3)
      const thirdValue = ref(2.5)
      return { firstValue, secondValue, thirdValue, args }
    },
    template: `
      <div class="space-y-4">
        <CoelhoRating v-model="firstValue" color="primary" />
        <CoelhoRating v-model="secondValue" color="warning" />
        <CoelhoRating v-model="thirdValue" color="success" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    modelValue: 0,
  },
  render: () => ({
    components: { CoelhoRating },
    setup(args) {
      const value = ref(3)
      return { value, args }
    },
    template: `
      <CoelhoRating v-model="value" disabled />
    `,
  }),
}
