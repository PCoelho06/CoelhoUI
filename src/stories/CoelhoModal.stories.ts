import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CoelhoModal from '@/components/organisms/CoelhoModal.vue'
import CoelhoButton from '@/components/atoms/CoelhoButton.vue'

const meta = {
  title: 'Organisms/Modal',
  component: CoelhoModal,
  tags: ['autodocs'],
} satisfies Meta<typeof CoelhoModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: false,
  },
  render: () => ({
    components: { CoelhoModal, CoelhoButton },
    setup() {
      const isOpen = ref(false)
      const openModal = () => {
        isOpen.value = true
      }
      return { isOpen, openModal }
    },
    template: `
      <div>
        <CoelhoButton @click="openModal">Open Modal</CoelhoButton>
        <CoelhoModal v-model="isOpen">
          <p>This is the modal content.</p>
        </CoelhoModal>
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  args: {
    modelValue: false,
  },
  render: () => ({
    components: { CoelhoModal, CoelhoButton },
    setup() {
      const isOpen = ref(false)
      const openModal = () => {
        isOpen.value = true
      }
      return { isOpen, openModal }
    },
    template: `
      <div>
        <CoelhoButton @click="openModal">Open Modal</CoelhoButton>
        <CoelhoModal v-model="isOpen">
          <p>This is the modal content.</p>
          <template #footer>
            <CoelhoButton variant="secondary">Cancel</CoelhoButton>
            <CoelhoButton variant="primary">Confirm</CoelhoButton>
          </template>
        </CoelhoModal>
      </div>
    `,
  }),
}

export const FullScreen: Story = {
  args: {
    modelValue: false,
  },
  render: () => ({
    components: { CoelhoModal, CoelhoButton },
    setup() {
      const isOpen = ref(false)
      const openModal = () => {
        isOpen.value = true
      }
      return { isOpen, openModal }
    },
    template: `
      <div>
        <CoelhoButton @click="openModal">Open Modal</CoelhoButton>
        <CoelhoModal
          v-model="isOpen"
          size="full"
          position="center"
        >
          <p>Full screen modal content</p>
        </CoelhoModal>
      </div>
    `,
  }),
}

export const TopPositioned: Story = {
  args: {
    modelValue: false,
  },
  render: () => ({
    components: { CoelhoModal, CoelhoButton },
    setup() {
      const isOpen = ref(false)
      const openModal = () => {
        isOpen.value = true
      }
      return { isOpen, openModal }
    },
    template: `
      <div>
        <CoelhoButton @click="openModal">Open Modal</CoelhoButton>
        <CoelhoModal
          v-model="isOpen"
          position="top"
        >
          <p>Top positioned modal content</p>
        </CoelhoModal>
      </div>
    `,
  }),
}
