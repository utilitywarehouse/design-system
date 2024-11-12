import type { Breakpoints, Responsive } from '../../types';

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
