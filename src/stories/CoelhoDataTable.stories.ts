import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CoelhoDataTable from '../components/organisms/CoelhoDataTable.vue'
import CoelhoButton from '../components/atoms/CoelhoButton.vue'
import CoelhoBadge from '../components/atoms/CoelhoBadge.vue'
import CoelhoIcon from '@/components/atoms/CoelhoIcon.vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

const meta = {
  title: 'Organisms/DataTable',
  component: CoelhoDataTable,
  tags: ['autodocs'],
} satisfies Meta<typeof CoelhoDataTable>

export default meta
type Story = StoryObj<typeof meta>

// Données de test
const users = [
  { id: 1, name: 'Alice Martin', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'active' },
  { id: 4, name: 'David Clark', email: 'david@example.com', role: 'User', status: 'pending' },
  { id: 5, name: 'Eve Anderson', email: 'eve@example.com', role: 'Admin', status: 'active' },
]

// Colonnes de base
const baseColumns = [
  { key: 'name', label: 'Nom', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Rôle' },
  { key: 'status', label: 'Statut' },
]

export const Default: Story = {
  args: {
    items: users,
    columns: baseColumns,
  },
  render: () => ({
    components: { CoelhoDataTable },
    setup() {
      return {
        items: users,
        columns: baseColumns,
      }
    },
    template: `
      <CoelhoDataTable
        :items="items"
        :columns="columns"
      />
    `,
  }),
}

export const WithSelection: Story = {
  args: {
    items: users,
    columns: baseColumns,
    selectable: true,
  },
  render: () => ({
    components: { CoelhoDataTable, CoelhoButton },
    setup() {
      const selectedItems = ref([])
      return {
        items: users,
        columns: baseColumns,
        selectedItems,
      }
    },
    template: `
      <div class="space-y-4">
        <div v-if="selectedItems.length > 0">
          <CoelhoButton variant="danger">
            Supprimer {{ selectedItems.length }} élément(s)
          </CoelhoButton>
        </div>
        <CoelhoDataTable
          :items="items"
          :columns="columns"
          selectable
          v-model:selected="selectedItems"
        />
      </div>
    `,
  }),
}

export const WithCustomCells: Story = {
  args: {
    items: users,
    columns: baseColumns,
  },
  render: () => ({
    components: { CoelhoDataTable, CoelhoBadge },
    setup() {
      return {
        items: users,
        columns: baseColumns,
      }
    },
    template: `
      <CoelhoDataTable
        :items="items"
        :columns="columns"
      >
        <template #cell-status="{ value }">
          <CoelhoBadge
            :variant="value === 'active' ? 'success' : value === 'inactive' ? 'danger' : 'warning'"
          >
            {{ value }}
          </CoelhoBadge>
        </template>
      </CoelhoDataTable>
    `,
  }),
}

export const WithActions: Story = {
  args: {
    items: users,
    columns: baseColumns,
  },
  render: () => ({
    components: { CoelhoDataTable, CoelhoButton, CoelhoIcon },
    setup() {
      return {
        items: users,
        columns: baseColumns,
        PencilIcon,
        TrashIcon,
      }
    },
    template: `
      <CoelhoDataTable
        :items="items"
        :columns="columns"
      >
        <template #actions>
          <CoelhoButton variant="primary">
            Ajouter
          </CoelhoButton>
        </template>

        <template #rowActions="{ item }">
          <div class="flex space-x-2">
            <CoelhoButton variant="primary" size="sm">
              <CoelhoIcon :icon="PencilIcon" size="sm" />
            </CoelhoButton>
            <CoelhoButton variant="danger" size="sm">
              <CoelhoIcon :icon="TrashIcon" size="sm" />
            </CoelhoButton>
          </div>
        </template>
      </CoelhoDataTable>
    `,
  }),
}

export const WithoutSearch: Story = {
  args: {
    items: users,
    columns: baseColumns,
    searchable: false,
  },
  render: () => ({
    components: { CoelhoDataTable },
    setup() {
      return {
        items: users,
        columns: baseColumns,
      }
    },
    template: `
      <CoelhoDataTable
        :items="items"
        :columns="columns"
        :searchable="false"
      />
    `,
  }),
}

export const WithoutPagination: Story = {
  args: {
    items: users,
    columns: baseColumns,
    paginated: false,
  },
  render: () => ({
    components: { CoelhoDataTable },
    setup() {
      return {
        items: users,
        columns: baseColumns,
      }
    },
    template: `
      <CoelhoDataTable
        :items="items"
        :columns="columns"
        :paginated="false"
      />
    `,
  }),
}
