import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CoelhoAlert from '../components/molecules/CoelhoAlert.vue'

const meta = {
  title: 'Molecules/Alert',
  component: CoelhoAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: "Style de l'alerte",
    },
    title: {
      control: 'text',
      description: "Titre de l'alerte",
    },
    message: {
      control: 'text',
      description: "Message de l'alerte",
    },
    dismissible: {
      control: 'boolean',
      description: "Possibilité de fermer l'alerte",
    },
    showIcon: {
      control: 'boolean',
      description: "Afficher l'icône",
    },
  },
} satisfies Meta<typeof CoelhoAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    modelValue: true,
    title: 'Information',
    message: "Ceci est une alerte d'information.",
    variant: 'info',
  },
  render: () => ({
    components: { CoelhoAlert },
    setup() {
      const show = ref(true)
      return { show }
    },
    template: `
      <CoelhoAlert
        v-model="show"
        title="Information"
        message="Ceci est une alerte d'information."
        variant="info"
      />
    `,
  }),
}

export const Success: Story = {
  args: {
    modelValue: true,
    title: 'Succès',
    message: "L'opération a été effectuée avec succès.",
    variant: 'success',
  },
  render: () => ({
    components: { CoelhoAlert },
    setup() {
      const show = ref(true)
      return { show }
    },
    template: `
      <CoelhoAlert
        v-model="show"
        title="Succès"
        message="L'opération a été effectuée avec succès."
        variant="success"
      />
    `,
  }),
}

export const Warning: Story = {
  args: {
    modelValue: true,
    title: 'Attention',
    message: 'Veuillez vérifier les informations saisies.',
    variant: 'warning',
  },
  render: () => ({
    components: { CoelhoAlert },
    setup() {
      const show = ref(true)
      return { show }
    },
    template: `
      <CoelhoAlert
        v-model="show"
        title="Attention"
        message="Veuillez vérifier les informations saisies."
        variant="warning"
      />
    `,
  }),
}

export const Error: Story = {
  args: {
    modelValue: true,
    title: 'Erreur',
    message: "Une erreur est survenue lors de l'opération.",
    variant: 'error',
  },
  render: () => ({
    components: { CoelhoAlert },
    setup() {
      const show = ref(true)
      return { show }
    },
    template: `
      <CoelhoAlert
        v-model="show"
        title="Erreur"
        message="Une erreur est survenue lors de l'opération."
        variant="error"
      />
    `,
  }),
}

export const WithoutIcon: Story = {
  args: {
    modelValue: true,
    title: 'Sans icône',
    message: 'Une alerte sans icône.',
    showIcon: false,
  },
  render: () => ({
    components: { CoelhoAlert },
    setup() {
      const show = ref(true)
      return { show }
    },
    template: `
      <CoelhoAlert
        v-model="show"
        title="Sans icône"
        message="Une alerte sans icône."
        :show-icon="false"
      />
    `,
  }),
}

export const NonDismissible: Story = {
  args: {
    modelValue: true,
    title: 'Non fermable',
    message: 'Cette alerte ne peut pas être fermée.',
    dismissible: false,
  },
  render: () => ({
    components: { CoelhoAlert },
    setup() {
      const show = ref(true)
      return { show }
    },
    template: `
      <CoelhoAlert
        v-model="show"
        title="Non fermable"
        message="Cette alerte ne peut pas être fermée."
        :dismissible="false"
      />
    `,
  }),
}
