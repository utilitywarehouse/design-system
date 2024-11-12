import type { ComponentPropsWithoutRef } from 'react';

import { Responsive } from '../../types';

export interface BodyTextProps extends ComponentPropsWithoutRef<'p'> {
  /**
   * Applies the text font styles.
   * @default body
   */
  variant?: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /** Set the font-weight */
  weight?: Responsive<'regular' | 'medium' | 'semibold'>;
  /**
   * Set the text-align on the component.
   */
  align?: Responsive<'left' | 'center' | 'right'>;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  truncate?: boolean | undefined;
  /**
   * Sets the text colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * @default colorsCommon.brandMidnight
   */
  color?: string;
}
