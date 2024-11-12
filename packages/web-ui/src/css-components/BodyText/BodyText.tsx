import * as React from 'react';

import clsx from 'clsx';

import '@utilitywarehouse/colour-system/css/colours.css';

import './BodyText.css';
import { BodyTextProps } from './BodyText.props';

import { withBreakpoints } from './with-breakpoints';

const componentName = 'BodyText';
const componentClassName = 'uwp-' + componentName;

const classNames = {
  variant: {
    subtitle: 'uwp-variant-subtitle',
    body: 'uwp-variant-body',
    legalNote: 'uwp-variant-legalNote',
    caption: 'uwp-variant-caption',
  },
  truncate: 'uwp-truncate',
};

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 */
export const BodyText = React.forwardRef<
  React.ElementRef<'p'>,
  React.PropsWithChildren<BodyTextProps>
>(
  (
    { variant = 'body', weight = 'regular', align, truncate, color, className, style, ...props },
    ref
  ) => {
    const fontWeightClassName = withBreakpoints(weight, 'weight');
    const textAlignClassName = withBreakpoints(align, 'text-align');
    const styleProps = { '--uwp-color': color, ...style };
    return (
      <p
        ref={ref}
        className={clsx(
          componentClassName,
          classNames.variant[variant],
          fontWeightClassName,
          textAlignClassName,
          { [classNames.truncate]: truncate },
          className
        )}
        style={styleProps}
        {...props}
      />
    );
  }
);

BodyText.displayName = componentName;
