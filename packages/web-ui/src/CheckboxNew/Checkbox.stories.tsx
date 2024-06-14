import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Flex } from '../Flex';

const meta: Meta<typeof Checkbox> = {
  title: 'Web UI / Components / CheckboxNew',
  component: Checkbox,
  argTypes: {
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    disabled: { type: 'boolean' },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const KitchenSink: Story = {};
export const Workshop: Story = {
  render: args => (
    <Flex direction="column" gap={2} role="group">
      <Checkbox {...args} />
      <Checkbox {...args} />
      <Checkbox {...args} />
    </Flex>
  ),
};
