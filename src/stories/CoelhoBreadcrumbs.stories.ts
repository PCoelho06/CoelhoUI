import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoBreadcrumbs from '../components/molecules/CoelhoBreadcrumbs.vue'
import { UserIcon, CogIcon, DocumentIcon } from '@heroicons/vue/24/solid'

const meta = {
  title: 'Molecules/Breadcrumbs',
  component: CoelhoBreadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: "Items du fil d'ariane",
    },
    showHome: {
      control: 'boolean',
      description: "Afficher le lien d'accueil",
    },
    homeLabel: {
      control: 'text',
      description: "Label du lien d'accueil",
    },
    homePath: {
      control: 'text',
      description: "Chemin du lien d'accueil",
    },
    homeIcon: {
      control: 'object',
      description: "Icône du lien d'accueil",
    },
    separator: {
      control: 'text',
      description: 'Séparateur textuel',
    },
    separatorIcon: {
      control: 'object',
      description: 'Icône de séparation',
    },
  },
} satisfies Meta<typeof CoelhoBreadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { label: 'Utilisateurs', to: '/users' },
      { label: 'Paramètres', to: '/users/settings' },
      { label: 'Profil' },
    ],
  },
}

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Utilisateurs', to: '/users', icon: UserIcon },
      { label: 'Paramètres', to: '/users/settings', icon: CogIcon },
      { label: 'Profil', icon: DocumentIcon },
    ],
  },
}

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Utilisateurs', to: '/users' },
      { label: 'Paramètres', to: '/users/settings' },
      { label: 'Profil' },
    ],
    separator: '›',
    separatorIcon: undefined,
  },
}

export const WithoutHome: Story = {
  args: {
    showHome: false,
    items: [
      { label: 'Utilisateurs', to: '/users' },
      { label: 'Paramètres', to: '/users/settings' },
      { label: 'Profil' },
    ],
  },
}
