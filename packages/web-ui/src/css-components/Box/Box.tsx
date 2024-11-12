import * as React from 'react';

import clsx from 'clsx';

import './Box.css';
import { BoxProps } from './Box.props';

import { withBreakpoints } from './with-breakpoints';

const componentName = 'Box';
const componentClassName = 'uwp-' + componentName;

export const Box = React.forwardRef<React.ElementRef<'div'>, React.PropsWithChildren<BoxProps>>(
  ({ className, padding, style, ...props }, ref) => {
    const styleProps = withBreakpoints(padding, 'padding');
    return (
      <div
        ref={ref}
        className={clsx(componentClassName, styleProps?.className, className)}
        {...props}
        style={{ ...styleProps?.style, ...style }}
      />
    );
  }
);

Box.displayName = componentName;
