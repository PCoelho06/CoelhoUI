import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CoelhoPagination from '../components/molecules/CoelhoPagination.vue'

const meta = {
  title: 'Molecules/Pagination',
  component: CoelhoPagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Page actuelle',
    },
    totalPages: {
      control: 'number',
      description: 'Nombre total de pages',
    },
    totalItems: {
      control: 'number',
      description: "Nombre total d'éléments",
    },
    itemsPerPage: {
      control: 'number',
      description: "Nombre d'éléments par page",
    },
    maxVisiblePages: {
      control: 'number',
      description: 'Nombre maximum de pages visibles',
    },
    showInfo: {
      control: 'boolean',
      description: 'Afficher les informations sur les résultats',
    },
  },
} satisfies Meta<typeof CoelhoPagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
  render: () => ({
    components: { CoelhoPagination },
    setup() {
      const currentPage = ref(1)
      return {
        currentPage,
        totalPages: 10,
        totalItems: 100,
        itemsPerPage: 10,
      }
    },
    template: `
      <CoelhoPagination
        v-model:currentPage="currentPage"
        :total-pages="totalPages"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
      />
    `,
  }),
}

export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    totalItems: 200,
    itemsPerPage: 10,
  },
  render: () => ({
    components: { CoelhoPagination },
    setup() {
      const currentPage = ref(5)
      return {
        currentPage,
        totalPages: 20,
        totalItems: 200,
        itemsPerPage: 10,
      }
    },
    template: `
      <CoelhoPagination
        v-model:currentPage="currentPage"
        :total-pages="totalPages"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
      />
    `,
  }),
}

export const WithoutInfo: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    showInfo: false,
  },
  render: () => ({
    components: { CoelhoPagination },
    setup() {
      const currentPage = ref(1)
      return {
        currentPage,
        totalPages: 10,
        showInfo: false,
      }
    },
    template: `
      <CoelhoPagination
        v-model:currentPage="currentPage"
        :total-pages="totalPages"
        :show-info="showInfo"
      />
    `,
  }),
}
