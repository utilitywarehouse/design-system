import type { Meta, StoryObj } from '@storybook/react';

import { BodyText } from './BodyText';

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;
const weights = ['regular', 'medium', 'semibold'] as const;

const meta: Meta<typeof BodyText> = {
  title: 'Web UI / CSS Components / BodyText',
  component: BodyText,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: { options: variants, control: { type: 'radio' } },
    weight: { options: weights, control: { type: 'radio' } },
    truncate: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Hamburgefons',
    variant: 'body',
    weight: { mobile: 'regular', tablet: 'medium', desktop: 'semibold' },
    align: { mobile: 'left', tablet: 'center', desktop: 'right' },
    truncate: false,
    color: '',
  },
};

export default meta;
type Story = StoryObj<typeof BodyText>;

export const Workshop: Story = {};
