import type { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { Responsive } from '../../types';

export interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  padding?: Responsive<string>;
}
