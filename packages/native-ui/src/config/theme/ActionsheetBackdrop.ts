import { createStyle } from '@gluestack-style/react';

export const ActionsheetBackdrop = createStyle({
  ':initial': {
    opacity: 0,
  },
  ':animate': {
    opacity: 0.7,
  },
  ':exit': {
    opacity: 0,
  },
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  bg: '$grey1000',
  _dark: {
    bg: '$darkGrey25',
  },
  _web: {
    cursor: 'default',
    pointerEvents: 'auto',
  },
});
