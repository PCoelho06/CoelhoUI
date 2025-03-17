import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { addDays } from 'date-fns'
import CoelhoCalendar from '@/components/organisms/CoelhoCalendar.vue'

const meta = {
  title: 'Organisms/Calendar',
  component: CoelhoCalendar,
  tags: ['autodocs'],
  argTypes: {
    viewMode: {
      control: 'select',
      options: ['month', 'week', 'day'],
      description: 'Calendar view mode',
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Date selection mode',
    },
    initialDate: {
      control: 'date',
      description: 'Initial date for the calendar',
    },
  },
  args: {
    viewMode: 'month',
    selectionMode: 'single',
    initialDate: new Date(),
  },
} satisfies Meta<typeof CoelhoCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { CoelhoCalendar },
    setup() {
      const selectedDates = ref<Date[]>([])
      return { args, selectedDates }
    },
    template: `
      <CoelhoCalendar
        v-bind="args"
        v-model:selectedDates="selectedDates"
      />
    `,
  }),
}

export const MultipleSelection: Story = {
  args: {
    selectionMode: 'multiple',
  },
  render: Default.render,
}

export const RangeSelection: Story = {
  args: {
    selectionMode: 'range',
  },
  render: Default.render,
}

export const WeekView: Story = {
  args: {
    viewMode: 'week',
  },
  render: Default.render,
}

export const DayView: Story = {
  args: {
    viewMode: 'day',
  },
  render: Default.render,
}

export const WithDisabledDates: Story = {
  args: {
    disabledDates: [new Date(), addDays(new Date(), 1), addDays(new Date(), 2)],
  },
  render: Default.render,
}
