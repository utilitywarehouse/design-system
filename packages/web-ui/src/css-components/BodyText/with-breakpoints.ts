import type { Breakpoints, Responsive } from '../../types';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return `uwp-${prefix}-${value}`;
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const baseClassName = `uwp-${prefix}-${breakpointValue}`;
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    return classes.join(' ');
  }
};
