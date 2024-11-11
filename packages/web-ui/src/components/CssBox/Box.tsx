import * as React from 'react';

import clsx from 'clsx';

import './Box.css';
import { BoxProps } from './Box.props';

import { Breakpoints, Responsive } from '../../types';

const componentName = 'Box';
const componentClassName = 'uwp-' + componentName;

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return { className: `uwp-${prefix}`, style: { [`--uwp-${prefix}`]: value } };
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const baseClassName = `uwp-${prefix}`;
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    const styles = (Object.keys(value) as Array<Breakpoints>).reduce(
      (acc: { [key: string]: string }, bp: Breakpoints) => {
        const breakpointValue = value[bp];
        if (breakpointValue !== undefined) {
          const baseStyleName = `--uwp-${prefix}`;
          const styleName = bp === initialBreakpoint ? baseStyleName : `${baseStyleName}-${bp}`;
          acc[styleName] = breakpointValue;
          return acc;
        }
        return acc;
      },
      {}
    );

    return { className: classes.join(' '), style: styles };
  }
};

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
