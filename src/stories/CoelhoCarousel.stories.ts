import type { Meta, StoryObj } from '@storybook/vue3'
import CoelhoCarousel from '../components/organisms/CoelhoCarousel.vue'

const meta = {
  title: 'Organisms/Carousel',
  component: CoelhoCarousel,
  tags: ['autodocs'],
  argTypes: {
    showArrows: {
      control: 'boolean',
      description: 'Afficher les flèches de navigation',
    },
    showDots: {
      control: 'boolean',
      description: 'Afficher les points de navigation',
    },
    autoplay: {
      control: 'boolean',
      description: 'Activer le défilement automatique',
    },
    autoplayTiming: {
      control: 'number',
      description: 'Intervalle de défilement automatique (en ms)',
    },
    loop: {
      control: 'boolean',
      description: 'Activer la boucle infinie',
    },
    effect: {
      control: 'select',
      options: ['slide', 'fade'],
      description: 'Effet de transition',
    },
  },
} satisfies Meta<typeof CoelhoCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showArrows: true,
    showDots: true,
    autoplay: false,
    loop: true,
  },
  render: (args) => ({
    components: { CoelhoCarousel },
    setup() {
      return { args }
    },
    template: `
      <CoelhoCarousel v-bind="args" class="w-full h-[400px]">
        <template #slide-0>
          <div class="w-full h-full bg-primary/20 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 1</h2>
          </div>
        </template>
        <template #slide-1>
          <div class="w-full h-full bg-red-500/40 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 2</h2>
          </div>
        </template>
        <template #slide-2>
          <div class="w-full h-full bg-green-500/60 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 3</h2>
          </div>
        </template>
      </CoelhoCarousel>
    `,
  }),
}

export const AutoplayExample: Story = {
  args: {
    showArrows: true,
    showDots: true,
    autoplay: true,
    autoplayTiming: 3000,
    loop: true,
  },
  render: (args) => ({
    components: { CoelhoCarousel },
    setup() {
      return { args }
    },
    template: `
      <CoelhoCarousel v-bind="args" class="w-full h-[400px]">
        <template #slide-0>
          <div class="w-full h-full bg-primary/20 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 1</h2>
          </div>
        </template>
        <template #slide-1>
          <div class="w-full h-full bg-red-500/40 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 2</h2>
          </div>
        </template>
        <template #slide-2>
          <div class="w-full h-full bg-green-500/60 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 3</h2>
          </div>
        </template>
      </CoelhoCarousel>
    `,
  }),
}

export const WithoutControls: Story = {
  args: {
    showArrows: false,
    showDots: false,
    autoplay: false,
    loop: true,
  },
  render: (args) => ({
    components: { CoelhoCarousel },
    setup() {
      return { args }
    },
    template: `
      <CoelhoCarousel v-bind="args" class="w-full h-[400px]">
        <template #slide-0>
          <div class="w-full h-full bg-primary/20 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 1</h2>
          </div>
        </template>
        <template #slide-1>
          <div class="w-full h-full bg-red-500/40 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 2</h2>
          </div>
        </template>
        <template #slide-2>
          <div class="w-full h-full bg-green-500/60 flex items-center justify-center">
            <h2 class="text-2xl font-bold">Slide 3</h2>
          </div>
        </template>
      </CoelhoCarousel>
    `,
  }),
}
