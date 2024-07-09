import * as React from 'react';
import { PropsWithSx } from '../types';
import { FieldsetProps } from './Fieldset.props';
import { withGlobalPrefix } from '../utils';
import { styled } from '../theme';
import { Flex } from '../Flex';
import clsx from 'clsx';

const componentName = 'Fieldset';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled('fieldset')({
  border: 0,
  margin: 0,
  padding: 0,
});

/**
 * The `Fieldset` component should be used to group related form inputs, and
 * should be used with the `FieldsetLegend` component
 */
export const Fieldset = React.forwardRef<
  React.ElementRef<'fieldset'>,
  React.PropsWithChildren<PropsWithSx<FieldsetProps>>
>(({ children, className, ...props }, ref) => {
  return (
    <StyledElement className={clsx(componentClassName, className)} ref={ref} {...props}>
      <Flex direction="column" gap={2}>
        {children}
      </Flex>
    </StyledElement>
  );
});

Fieldset.displayName = componentName;
