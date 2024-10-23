import * as React from 'react';

import clsx from 'clsx';

import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';

import type { BoxProps } from './Box.props';

import { theme, styled } from '../../theme';
import type { Theme } from '../../theme';
import { withGlobalPrefix } from '../../utils';

type Options = {
  componentName?: string;
};

export function createBox<
  RootComponent extends React.ElementType = MuiBoxTypeMap['defaultComponent'],
>(options: Options = {}) {
  const { componentName = 'Box' } = options;
  const BoxRoot = styled('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as',
  })({});

  const Box = React.forwardRef<RootComponent, BoxProps>(function Box({ className, ...props }, ref) {
    const defaultClassName = withGlobalPrefix(componentName);
    return (
      <BoxRoot ref={ref} className={clsx(className, defaultClassName)} theme={theme} {...props} />
    );
  });

  // eslint-disable-next-line @typescript-eslint/ban-types
  return Box as OverridableComponent<MuiBoxTypeMap<{}, RootComponent, Theme>>;
}
