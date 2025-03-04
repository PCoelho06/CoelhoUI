import type { Meta, StoryObj } from '@storybook/vue3'
import { CoelhoHeading, CoelhoParagraph, CoelhoText, CoelhoLink } from '../components'

const meta = {
  title: 'Atoms/Typography',
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const Headings: StoryObj = {
  render: () => ({
    components: { CoelhoHeading },
    template: `
      <div>
        <CoelhoHeading level="1">Heading 1</CoelhoHeading>
        <CoelhoHeading level="2">Heading 2</CoelhoHeading>
        <CoelhoHeading level="3">Heading 3</CoelhoHeading>
        <CoelhoHeading level="4">Heading 4</CoelhoHeading>
        <CoelhoHeading level="5">Heading 5</CoelhoHeading>
        <CoelhoHeading level="6">Heading 6</CoelhoHeading>
      </div>
    `,
  }),
}

export const Paragraphs: StoryObj = {
  render: () => ({
    components: { CoelhoParagraph },
    template: `
      <div>
        <CoelhoParagraph size="lg">
          Large paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CoelhoParagraph>
        <CoelhoParagraph>
          Default paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CoelhoParagraph>
        <CoelhoParagraph size="sm">
          Small paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CoelhoParagraph>
        <CoelhoParagraph size="xs">
          Extra small paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CoelhoParagraph>
      </div>
    `,
  }),
}

export const TextVariants: StoryObj = {
  render: () => ({
    components: { CoelhoText },
    template: `
      <div class="space-y-4">
        <div>
          <CoelhoText weight="bold">Bold text</CoelhoText>
        </div>
        <div>
          <CoelhoText italic>Italic text</CoelhoText>
        </div>
        <div>
          <CoelhoText underline>Underlined text</CoelhoText>
        </div>
        <div>
          <CoelhoText lineThrough>Line-through text</CoelhoText>
        </div>
        <div>
          <CoelhoText uppercase>Uppercase text</CoelhoText>
        </div>
        <div>
          <CoelhoText color="primary">Primary colored text</CoelhoText>
        </div>
      </div>
    `,
  }),
}

export const Links: StoryObj = {
  render: () => ({
    components: { CoelhoLink },
    template: `
      <div class="space-y-4">
        <div>
          <CoelhoLink href="#">Internal link</CoelhoLink>
        </div>
        <div>
          <CoelhoLink href="https://example.com">External link</CoelhoLink>
        </div>
        <div>
          <CoelhoLink to="/some-route">Router link</CoelhoLink>
        </div>
        <div>
          <CoelhoLink href="#" disabled>Disabled link</CoelhoLink>
        </div>
      </div>
    `,
  }),
}
