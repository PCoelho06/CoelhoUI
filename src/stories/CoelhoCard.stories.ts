import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoCard from '../components/organisms/CoelhoCard.vue'
import CoelhoButton from '@/components/atoms/CoelhoButton.vue'
import CoelhoIcon from '@/components/atoms/CoelhoIcon.vue'
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'

const meta = {
  title: 'Organisms/Card',
  component: CoelhoCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Card layout variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size',
    },
    clickable: {
      control: 'boolean',
      description: 'Makes the card interactive',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
    image: {
      control: 'text',
      description: 'Image URL',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'vertical',
    size: 'md',
    clickable: false,
  },
} satisfies Meta<typeof CoelhoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description for the card.',
    image: 'https://picsum.photos/400/300',
  },
  render: (args) => ({
    components: { CoelhoCard },
    setup() {
      return { args }
    },
    template: `
      <CoelhoCard v-bind="args">
        <p>This is the main content of the card.</p>
      </CoelhoCard>
    `,
  }),
}

export const Horizontal: Story = {
  args: {
    ...Default.args,
    variant: 'horizontal',
  },
  render: Default.render,
}

export const WithCustomFooter: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    components: { CoelhoCard, CoelhoButton, CoelhoIcon },
    setup() {
      return { args, TrashIcon, PencilIcon }
    },
    template: `
      <CoelhoCard v-bind="args">
        <template #footer>
          <div class="flex justify-end gap-4">
            <CoelhoButton variant="primary" size="sm">
              <CoelhoIcon :icon="PencilIcon" size="sm" />
            </CoelhoButton>
            <CoelhoButton variant="danger" size="sm">
              <CoelhoIcon :icon="TrashIcon" size="sm" />
            </CoelhoButton>
          </div>
        </template>
      </CoelhoCard>
    `,
  }),
}

export const Clickable: Story = {
  args: {
    ...Default.args,
    clickable: true,
    title: 'Interactive Card',
  },
  render: (args) => ({
    components: { CoelhoCard },
    setup() {
      function handleClick() {
        console.log('Card clicked!')
      }
      return { args, handleClick }
    },
    template: `
      <CoelhoCard v-bind="args" @click="handleClick">
        <p>Click me! I'm an interactive card.</p>
      </CoelhoCard>
    `,
  }),
}
