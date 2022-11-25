import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { BackgroundStack } from '../utils';
import RadioButton from '../../src/components/RadioButton';
import RadioGroup from '../../src/components/RadioGroup';
import { Box, styled, Typography } from '@mui/material';

enum RadioValues {
  YES = 'Yes',
  NO = 'No',
  MAYBE = 'Maybe',
}

export default {
  title: 'Components/RadioGrouped',
  component: RadioGroup,
  argTypes: {
    inline: { control: 'boolean' },
    'disabled check': {
      control: {
        type: 'radio',
        options: {
          Yes: RadioValues.YES,
          No: RadioValues.NO,
          Maybe: RadioValues.MAYBE,
        },
      },
    },
  },
  args: {
    inline: true,
    'disabled check': RadioValues.YES,
  },
} as Meta;

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'inline',
})<{ inline: boolean }>(({ inline }) => ({
  display: 'inline-flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: inline ? 'center' : 'start',
}));

const StyledHeader = styled(Typography)(() => ({
  marginRight: 12,
}));

export const RadioGroupedStory: Story = args => {
  return (
    <BackgroundStack>
      <Box>
        <StyledBox inline={args.inline} sx={{ marginBottom: '24px' }}>
          <StyledHeader>Enabled Group</StyledHeader>
          <RadioGroup inline={args.inline}>
            <RadioButton label="Yes" value={RadioValues.YES} color="secondary" />
            <RadioButton label="No" value={RadioValues.NO} color="secondary" />
            <RadioButton label="Maybe" value={RadioValues.MAYBE} color="secondary" />
          </RadioGroup>
        </StyledBox>
        <StyledBox inline={args.inline}>
          <StyledHeader>Disabled Group</StyledHeader>
          <RadioGroup inline={args.inline} value={args['disabled check']}>
            <RadioButton label="Yes" value={RadioValues.YES} color="secondary" disabled />
            <RadioButton label="No" value={RadioValues.NO} color="secondary" disabled />
            <RadioButton label="Maybe" value={RadioValues.MAYBE} color="secondary" disabled />
          </RadioGroup>
        </StyledBox>
      </Box>
    </BackgroundStack>
  );
};
RadioGroupedStory.storyName = 'RadioGrouped';
