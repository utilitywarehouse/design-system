import { createStyle } from '@gluestack-style/react';

export const Switch = createStyle({
  props: {
    trackColor: { false: '$cyan200', true: '$cyan900' },
    thumbColor: '$pink500',
    activeThumbColor: '$pink500',

    // for ios specifically in unchecked state
    ios_backgroundColor: '$backgroundLight300',
  },
  borderRadius: '$full',
  variants: {
    size: {
      sm: {
        transform: [
          {
            scale: 0.75,
          },
        ],
      },
      md: {},
      lg: {
        transform: [
          {
            scale: 1.25,
          },
        ],
      },
    },
  },
  _web: {
    ':focus': {
      outlineWidth: 0,
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary600',
        outlineWidth: 0,
        outlineStyle: 'solid',
      },
    },
  },

  defaultProps: {
    size: 'md',
  },
  ':disabled': {
    _web: {
      cursor: 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
    opacity: 0.4,

    trackColor: { false: '$backgroundLight300', true: '$primary600' },
    // for ios specifically in unchecked state
    ios_backgroundColor: '$backgroundLight300',
    ':hover': {
      props: {
        trackColor: { false: '$backgroundLight300', true: '$primary600' },
      },
    },
  },
  ':invalid': {
    borderColor: '$error700',
    borderRadius: 12,
    borderWidth: 2,
  },
  ':hover': {
    props: {
      trackColor: { false: '$backgroundLight400', true: '$primary700' },
      ios_backgroundColor: '$backgroundLight400',
    },
    ':invalid': {
      props: {
        trackColor: { false: '$backgroundLight300', true: '$primary700' },
      },
    },
  },
  ':checked': {
    props: {
      thumbColor: '$backgroundLight0',
    },
  },
  _dark: {
    props: {
      trackColor: { false: '$cyan200', true: '$cyan900' },
      thumbColor: '$pink500',
      activeThumbColor: '$pink500',
    },
    ':invalid': {
      borderColor: '$error400',
      borderRadius: 12,
      borderWidth: 2,
    },
    ':hover': {
      props: {
        trackColor: { false: '$backgroundDark600', true: '$primary600' },
        ios_backgroundColor: '$backgroundLight400',
      },
      ':invalid': {
        props: {
          trackColor: { false: '$backgroundDark700', true: '$primary600' },
        },
      },
    },
    ':disabled': {
      _web: {
        cursor: 'pointer',
        ':disabled': {
          cursor: 'not-allowed',
        },
      },
      opacity: 0.4,
      trackColor: { false: '$backgroundLight300', true: '$primary500' },
      // for ios specifically in unchecked state
      ios_backgroundColor: '$backgroundLight300',
      ':hover': {
        props: {
          trackColor: { false: '$backgroundDark700', true: '$primary500' },
        },
      },
    },
  },
});
