import { createStyle } from '@gluestack-style/react';

export const Button = createStyle({
  borderRadius: '$full',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  _text: {
    fontWeight: '$medium',
  },

  ':focusVisible': {
    outlineWidth: '$1',
    outlineStyle: 'solid',
  },

  variants: {
    colorScheme: {
      cyan: {
        backgroundColor: '$cyan400',
        borderColor: '$cyan400',

        _text: {
          color: '$cyan1000',
        },

        _icon: {
          color: '$cyan1000',
        },

        _spinner: {
          _svg: {
            color: '$cyan1000',
          },
        },

        ':hover': {
          bg: '$cyan500',

          _text: {
            color: '$cyan1000',
          },

          _icon: {
            color: '$cyan1000',
          },

          _spinner: {
            _svg: {
              color: '$cyan1000',
            },
          },
        },

        ':active': {
          bg: '$cyan300',

          _text: {
            color: '$cyan1000',
          },

          _icon: {
            color: '$cyan1000',
          },

          _spinner: {
            _svg: {
              color: '$cyan1000',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$cyan100',

          _text: {
            color: '$cyan300',
          },
          _icon: {
            color: '$cyan300',
          },
          _spinner: {
            _svg: {
              color: '$cyan300',
            },
          },
        },

        ':focusVisible': {
          outlineColor: '$cyan800',
        },

        _dark: {
          bg: '$darkCyan400',

          _text: {
            color: '$darkCyan1000',
          },

          _icon: {
            color: '$darkCyan1000',
          },

          _spinner: {
            _svg: {
              color: '$darkCyan1000',
            },
          },

          ':hover': {
            bg: '$darkCyan500',
            _text: {
              color: '$darkCyan1000',
            },
            _icon: {
              color: '$darkCyan1000',
            },
            _spinner: {
              _svg: {
                color: '$darkCyan1000',
              },
            },
          },

          ':active': {
            bg: '$darkCyan300',
            _text: {
              color: '$darkCyan1000',
            },
            _icon: {
              color: '$darkCyan1000',
            },
            _spinner: {
              _svg: {
                color: '$darkCyan1000',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkCyan100',

            _text: {
              color: '$darkCyan300',
            },
            _icon: {
              color: '$darkCyan300',
            },
            _spinner: {
              _svg: {
                color: '$darkCyan300',
              },
            },

            ':focusVisible': {
              outlineColor: '$darkCyan800',
            },
          },
        },
      },

      red: {
        backgroundColor: '$red500',
        borderColor: '$red500',

        _text: {
          color: '$white',
        },

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':hover': {
          bg: '$red600',

          _text: {
            color: '$white',
          },
          _icon: {
            color: '$white',
          },
          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':active': {
          bg: '$red700',

          _text: {
            color: '$white',
          },
          _icon: {
            color: '$white',
          },
          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$red100',

          _text: {
            color: '$red300',
          },
          _icon: {
            color: '$red300',
          },
          _spinner: {
            _svg: {
              color: '$red300',
            },
          },
        },

        ':focusVisible': {
          outlineColor: '$red700',
        },

        _dark: {
          bg: '$darkRed500',

          _text: {
            color: '$darkWhite',
            ':hover': {
              color: '$darkWhite',
            },
            ':active': {
              color: '$darkWhite',
            },
          },
          _icon: {
            color: '$darkWhite',
            ':hover': {
              color: '$darkWhite',
            },
            ':active': {
              color: '$darkWhite',
            },
          },
          _spinner: {
            _svg: {
              color: '$darkWhite',
            },
          },

          ':hover': {
            bg: '$darkRed600',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkRed100',

            _text: {
              color: '$darkRed300',
            },
            _icon: {
              color: '$darkRed300',
            },
            _spinner: {
              _svg: {
                color: '$darkRed300',
              },
            },

            ':focusVisible': {
              outlineColor: '$darkRed700',
            },
          },
        },
      },

      green: {
        backgroundColor: '$green500',
        borderColor: '$green500',

        _text: {
          color: '$white',
        },

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':hover': {
          bg: '$green600',

          _text: {
            color: '$white',
          },

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':active': {
          bg: '$green700',

          _text: {
            color: '$white',
          },

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$green100',

          _text: {
            color: '$green300',
          },
          _icon: {
            color: '$green300',
          },
          _spinner: {
            _svg: {
              color: '$green300',
            },
          },
        },

        ':focusVisible': {
          outlineColor: '$green700',
        },

        _dark: {
          bg: '$darkGreen500',

          _text: {
            color: '$darkWhite',
          },

          _icon: {
            color: '$darkWhite',
          },

          _spinner: {
            _svg: {
              color: '$darkWhite',
            },
          },

          ':hover': {
            bg: '$darkGreen600',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':active': {
            bg: '$darkGreen700',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGreen100',

            _text: {
              color: '$darkGreen300',
            },
            _icon: {
              color: '$darkGreen300',
            },
            _spinner: {
              _svg: {
                color: '$darkGreen300',
              },
            },

            ':focusVisible': {
              outlineColor: '$darkGreen700',
            },
          },
        },
      },

      grey: {
        backgroundColor: '$grey500',
        borderColor: '$grey500',

        _text: {
          color: '$white',
        },

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':hover': {
          bg: '$grey600',

          _text: {
            color: '$white',
          },

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':active': {
          bg: '$grey700',

          _text: {
            color: '$white',
          },

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$grey100',

          _text: {
            color: '$grey300',
          },
          _icon: {
            color: '$grey300',
          },
          _spinner: {
            _svg: {
              color: '$grey300',
            },
          },
        },

        ':focusVisible': {
          outlineColor: '$grey700',
        },

        _dark: {
          bg: '$darkGrey500',

          _text: {
            color: '$darkWhite',
          },

          _icon: {
            color: '$darkWhite',
          },

          _spinner: {
            _svg: {
              color: '$darkWhite',
            },
          },

          ':hover': {
            bg: '$darkGrey600',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':active': {
            bg: '$darkGrey700',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGrey100',

            _text: {
              color: '$darkGrey300',
            },
            _icon: {
              color: '$darkGrey300',
            },
            _spinner: {
              _svg: {
                color: '$darkGrey300',
              },
            },

            ':focusVisible': {
              outlineColor: '$darkGrey700',
            },
          },
        },
      },
      gold: {
        backgroundColor: '$gold500',
        borderColor: '$gold500',

        _text: {
          color: '$white',
        },

        _icon: {
          color: '$white',
        },

        _spinner: {
          _svg: {
            color: '$white',
          },
        },

        ':hover': {
          bg: '$gold600',

          _text: {
            color: '$white',
          },

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':active': {
          bg: '$gold700',

          _text: {
            color: '$white',
          },

          _icon: {
            color: '$white',
          },

          _spinner: {
            _svg: {
              color: '$white',
            },
          },
        },

        ':disabled': {
          backgroundColor: '$gold100',

          _text: {
            color: '$gold300',
          },
          _icon: {
            color: '$gold300',
          },
          _spinner: {
            _svg: {
              color: '$gold300',
            },
          },
        },

        ':focusVisible': {
          outlineColor: '$gold700',
        },

        _dark: {
          bg: '$darkGold500',

          _text: {
            color: '$darkWhite',
          },

          _icon: {
            color: '$darkWhite',
          },

          _spinner: {
            _svg: {
              color: '$darkWhite',
            },
          },

          ':hover': {
            bg: '$darkGold600',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':active': {
            bg: '$darkGold700',

            _text: {
              color: '$darkWhite',
            },

            _icon: {
              color: '$darkWhite',
            },

            _spinner: {
              _svg: {
                color: '$darkWhite',
              },
            },
          },

          ':disabled': {
            backgroundColor: '$darkGold100',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              _svg: {
                color: '$darkGold300',
              },
            },

            ':focusVisible': {
              outlineColor: '$darkGold700',
            },
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
      },
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
    },

    size: {
      small: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
        minHeight: 32,
        gap: '$2',
      },
      regular: {
        paddingVertical: '$4',
        paddingHorizontal: '$6',
        minHeight: 48,
        gap: '$4',
        _icon: {
          width: 16,
          height: 16,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      size: 'small',
      value: {
        paddingVertical: '$1',
      },
    },
    {
      variant: 'outline',
      size: 'regular',
      value: {
        paddingVertical: '$3',
      },
    },
    {
      variant: 'outline',
      colorScheme: 'cyan',
      value: {
        backgroundColor: 'transparent',

        _icon: {
          color: '$cyan600',
        },

        _spinner: {
          _svg: {
            color: '$cyan600',
          },
        },

        ':hover': {
          backgroundColor: '$cyan75',

          _text: {
            color: '$cyan1000',
          },

          _icon: {
            color: '$cyan1000',
          },

          _spinner: {
            _svg: {
              color: '$cyan1000',
            },
          },
        },

        ':active': {
          backgroundColor: '$cyan200',

          _text: {
            color: '$cyan1000',
          },

          _icon: {
            color: '$cyan1000',
          },

          _spinner: {
            _svg: {
              color: '$cyan1000',
            },
          },
        },

        ':disabled': {
          borderColor: '$cyan300',
          backgroundColor: 'transparent',

          _text: {
            color: '$cyan300',
          },
          _icon: {
            color: '$cyan300',
          },
          _spinner: {
            _svg: {
              color: '$cyan300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$cyan75',
          outlineColor: '$cyan700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkCyan1000',
          },

          _icon: {
            color: '$darkCyan600',
          },

          _spinner: {
            _svg: {
              color: '$darkCyan600',
            },
          },

          ':hover': {
            backgroundColor: '$darkCyan75',

            _text: {
              color: '$darkCyan1000',
            },

            _icon: {
              color: '$darkCyan1000',
            },

            _spinner: {
              _svg: {
                color: '$darkCyan1000',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkCyan200',

            _text: {
              color: '$darkCyan1000',
            },

            _icon: {
              color: '$darkCyan1000',
            },

            _spinner: {
              _svg: {
                color: '$darkCyan1000',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkCyan300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkCyan300',
            },
            _icon: {
              color: '$darkCyan300',
            },
            _spinner: {
              _svg: {
                color: '$darkCyan300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkCyan75',
              outlineColor: '$darkCyan700',
            },
          },
        },
      },
    },
    {
      variant: 'outline',
      colorScheme: 'red',
      value: {
        backgroundColor: 'transparent',

        _text: {
          color: '$red900',
        },

        _icon: {
          color: '$red600',
        },

        _spinner: {
          _svg: {
            color: '$red600',
          },
        },

        ':hover': {
          backgroundColor: '$red100',

          _text: {
            color: '$red900',
          },

          _icon: {
            color: '$red900',
          },

          _spinner: {
            _svg: {
              color: '$red900',
            },
          },
        },

        ':active': {
          backgroundColor: '$red200',

          _text: {
            color: '$red900',
          },

          _icon: {
            color: '$red900',
          },

          _spinner: {
            _svg: {
              color: '$red900',
            },
          },
        },

        ':disabled': {
          borderColor: '$red300',
          backgroundColor: 'transparent',

          _text: {
            color: '$red300',
          },
          _icon: {
            color: '$red300',
          },
          _spinner: {
            _svg: {
              color: '$red300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$red100',
          outlineColor: '$red700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkRed900',
          },

          _icon: {
            color: '$darkRed600',
          },

          _spinner: {
            _svg: {
              color: '$darkRed600',
            },
          },

          ':hover': {
            backgroundColor: '$darkRed100',

            _text: {
              color: '$darkRed900',
            },

            _icon: {
              color: '$darkRed900',
            },

            _spinner: {
              _svg: {
                color: '$darkRed900',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkRed200',

            _text: {
              color: '$darkRed900',
            },

            _icon: {
              color: '$darkRed900',
            },

            _spinner: {
              _svg: {
                color: '$darkRed900',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkRed300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkRed300',
            },
            _icon: {
              color: '$darkRed300',
            },
            _spinner: {
              _svg: {
                color: '$darkRed300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkRed100',
              outlineColor: '$darkRed700',
            },
          },
        },
      },
    },
    {
      colorScheme: 'green',
      variant: 'outline',
      value: {
        backgroundColor: 'transparent',

        _text: {
          color: '$green900',
        },

        _icon: {
          color: '$green600',
        },

        _spinner: {
          _svg: {
            color: '$green600',
          },
        },

        ':hover': {
          backgroundColor: '$green100',

          _text: {
            color: '$green900',
          },

          _icon: {
            color: '$green900',
          },

          _spinner: {
            _svg: {
              color: '$green900',
            },
          },
        },

        ':active': {
          backgroundColor: '$green200',

          _text: {
            color: '$green900',
          },

          _icon: {
            color: '$green900',
          },

          _spinner: {
            _svg: {
              color: '$green900',
            },
          },
        },

        ':disabled': {
          borderColor: '$green300',
          backgroundColor: 'transparent',

          _text: {
            color: '$green300',
          },
          _icon: {
            color: '$green300',
          },
          _spinner: {
            _svg: {
              color: '$green300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$green100',
          outlineColor: '$green700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkGreen900',
          },

          _icon: {
            color: '$darkGreen600',
          },

          _spinner: {
            _svg: {
              color: '$darkGreen600',
            },
          },

          ':hover': {
            backgroundColor: '$darkGreen100',

            _text: {
              color: '$darkGreen900',
            },

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              _svg: {
                color: '$darkGreen900',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkGreen200',

            _text: {
              color: '$darkGreen900',
            },

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              _svg: {
                color: '$darkGreen900',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkGreen300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGreen300',
            },
            _icon: {
              color: '$darkGreen300',
            },
            _spinner: {
              _svg: {
                color: '$darkGreen300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkGreen100',
              outlineColor: '$darkGreen700',
            },
          },
        },
      },
    },
    {
      colorScheme: 'grey',
      variant: 'outline',
      value: {
        backgroundColor: 'transparent',

        _text: {
          color: '$grey1000',
        },

        _icon: {
          color: '$grey800',
        },

        _spinner: {
          _svg: {
            color: '$grey800',
          },
        },

        ':hover': {
          backgroundColor: '$grey100',

          _text: {
            color: '$grey1000',
          },

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            _svg: {
              color: '$grey1000',
            },
          },
        },

        ':active': {
          backgroundColor: '$grey175',

          _text: {
            color: '$grey1000',
          },

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            _svg: {
              color: '$grey1000',
            },
          },
        },

        ':disabled': {
          borderColor: '$grey300',
          backgroundColor: 'transparent',

          _text: {
            color: '$grey300',
          },
          _icon: {
            color: '$grey300',
          },
          _spinner: {
            _svg: {
              color: '$grey300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$grey100',
          outlineColor: '$grey700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkGrey1000',
          },

          _icon: {
            color: '$darkGrey600',
          },

          _spinner: {
            _svg: {
              color: '$darkGrey600',
            },
          },

          ':hover': {
            backgroundColor: '$darkGrey175',

            _text: {
              color: '$darkGrey1000',
            },

            _icon: {
              color: '$darkGrey1000',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey1000',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _text: {
              color: '$darkGrey1000',
            },

            _icon: {
              color: '$darkGrey1000',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey1000',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkGrey300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGrey300',
            },
            _icon: {
              color: '$darkGrey300',
            },
            _spinner: {
              _svg: {
                color: '$darkGrey300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkGrey100',
              outlineColor: '$darkGrey700',
            },
          },
        },
      },
    },
    {
      colorScheme: 'gold',
      variant: 'outline',
      value: {
        backgroundColor: 'transparent',

        _text: {
          color: '$gold900',
        },

        _icon: {
          color: '$gold600',
        },

        _spinner: {
          _svg: {
            color: '$gold600',
          },
        },

        ':hover': {
          backgroundColor: '$gold100',

          _text: {
            color: '$gold900',
          },

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            _svg: {
              color: '$gold900',
            },
          },
        },

        ':active': {
          backgroundColor: '$gold200',

          _text: {
            color: '$gold900',
          },

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            _svg: {
              color: '$gold900',
            },
          },
        },

        ':disabled': {
          borderColor: '$gold300',
          backgroundColor: 'transparent',

          _text: {
            color: '$gold300',
          },
          _icon: {
            color: '$gold300',
          },
          _spinner: {
            _svg: {
              color: '$gold300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$gold100',
          outlineColor: '$gold700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkGold900',
          },

          _icon: {
            color: '$darkGold600',
          },

          _spinner: {
            _svg: {
              color: '$darkGold600',
            },
          },

          ':hover': {
            backgroundColor: '$darkGold100',

            _text: {
              color: '$darkGold900',
            },

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              _svg: {
                color: '$darkGold900',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkGold200',

            _text: {
              color: '$darkGold900',
            },

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              _svg: {
                color: '$darkGold900',
              },
            },
          },

          ':disabled': {
            borderColor: '$darkGold300',
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              _svg: {
                color: '$darkGold300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkGold100',
              outlineColor: '$darkGold700',
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'cyan',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$cyan100',
        },

        ':active': {
          backgroundColor: '$cyan200',
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$cyan300',
          },
          _icon: {
            color: '$cyan300',
          },
          _spinner: {
            _svg: {
              color: '$cyan300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$cyan100',
          outlineColor: '$cyan700',
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkCyan100',
          },

          ':active': {
            backgroundColor: '$darkCyan200',
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkCyan300',
            },
            _icon: {
              color: '$darkCyan300',
            },
            _spinner: {
              color: '$darkCyan300',
              _svg: {
                color: '$darkCyan300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkCyan100',
              outlineColor: '$darkCyan700',
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'red',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$red100',
          _icon: {
            color: '$red900',
          },

          _spinner: {
            _svg: {
              color: '$red900',
            },
          },
        },

        ':active': {
          backgroundColor: '$red200',

          _icon: {
            color: '$red900',
          },

          _spinner: {
            _svg: {
              color: '$red900',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$red300',
          },
          _icon: {
            color: '$red300',
          },
          _spinner: {
            _svg: {
              color: '$red300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$red100',
          outlineColor: '$red700',
        },

        _text: {
          color: '$red900',
        },

        _icon: {
          color: '$red900',
        },

        _spinner: {
          _svg: {
            color: '$red900',
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkRed100',
            _icon: {
              color: '$darkRed900',
            },
            _spinner: {
              _svg: {
                color: '$darkRed900',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkRed200',

            _icon: {
              color: '$darkRed900',
            },

            _spinner: {
              _svg: {
                color: '$darkRed900',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkRed300',
            },
            _icon: {
              color: '$darkRed300',
            },
            _spinner: {
              _svg: {
                color: '$darkRed300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkRed100',
              outlineColor: '$darkRed700',
            },
          },

          _text: {
            color: '$darkRed900',
          },

          _icon: {
            color: '$darkRed900',
          },

          _spinner: {
            _svg: {
              color: '$darkRed900',
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'green',
      value: {
        backgroundColor: 'transparent',

        ':hover': {
          backgroundColor: '$green100',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            _svg: {
              color: '$green900',
            },
          },
        },

        ':active': {
          backgroundColor: '$green200',

          _icon: {
            color: '$green900',
          },

          _spinner: {
            _svg: {
              color: '$green900',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$green300',
          },
          _icon: {
            color: '$green300',
          },
          _spinner: {
            _svg: {
              color: '$green300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$green100',
          outlineColor: '$green700',
        },

        _text: {
          color: '$green900',
        },

        _icon: {
          color: '$green900',
        },

        _spinner: {
          _svg: {
            color: '$green900',
          },
        },

        _dark: {
          backgroundColor: 'transparent',

          ':hover': {
            backgroundColor: '$darkGreen100',

            _icon: {
              color: '$darkGreen900',
            },

            _spinner: {
              _svg: {
                color: '$darkGreen900',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkGreen200',
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGreen300',
            },
            _icon: {
              color: '$darkGreen300',
            },
            _spinner: {
              _svg: {
                color: '$darkGreen300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkGreen100',
              outlineColor: '$darkGreen700',
            },
          },

          _text: {
            color: '$darkGreen900',
          },

          _icon: {
            color: '$darkGreen900',
          },

          _spinner: {
            _svg: {
              color: '$darkGreen900',
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'grey',
      value: {
        backgroundColor: 'transparent',

        _text: {
          color: '$grey1000',
        },

        _icon: {
          color: '$grey1000',
        },

        _spinner: {
          _svg: {
            color: '$grey1000',
          },
        },

        ':hover': {
          backgroundColor: '$grey100',

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            _svg: {
              color: '$grey1000',
            },
          },
        },

        ':active': {
          backgroundColor: '$grey175',

          _icon: {
            color: '$grey1000',
          },

          _spinner: {
            _svg: {
              color: '$grey1000',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$grey300',
          },
          _icon: {
            color: '$grey300',
          },
          _spinner: {
            _svg: {
              color: '$grey300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$grey100',
          outlineColor: '$grey700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkGrey1000',
          },

          _icon: {
            color: '$darkGrey1000',
          },

          _spinner: {
            _svg: {
              color: '$darkGrey1000',
            },
          },

          ':hover': {
            backgroundColor: '$darkGrey100',

            _icon: {
              color: '$darkGrey1000',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey1000',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkGrey175',

            _icon: {
              color: '$darkGrey1000',
            },

            _spinner: {
              _svg: {
                color: '$darkGrey1000',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGrey300',
            },
            _icon: {
              color: '$darkGrey300',
            },
            _spinner: {
              _svg: {
                color: '$darkGrey300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkGrey100',
              outlineColor: '$darkGrey700',
            },
          },
        },
      },
    },
    {
      variant: 'ghost',
      colorScheme: 'gold',
      value: {
        backgroundColor: 'transparent',

        _text: {
          color: '$gold900',
        },

        _icon: {
          color: '$gold900',
        },

        _spinner: {
          _svg: {
            color: '$gold900',
          },
        },

        ':hover': {
          backgroundColor: '$gold100',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            _svg: {
              color: '$gold900',
            },
          },
        },

        ':active': {
          backgroundColor: '$gold200',

          _icon: {
            color: '$gold900',
          },

          _spinner: {
            _svg: {
              color: '$gold900',
            },
          },
        },

        ':disabled': {
          backgroundColor: 'transparent',

          _text: {
            color: '$gold300',
          },
          _icon: {
            color: '$gold300',
          },
          _spinner: {
            _svg: {
              color: '$gold300',
            },
          },
        },

        ':focusVisible': {
          backgroundColor: '$gold100',
          outlineColor: '$gold700',
        },

        _dark: {
          backgroundColor: 'transparent',

          _text: {
            color: '$darkGold900',
          },

          _icon: {
            color: '$darkGold900',
          },

          _spinner: {
            _svg: {
              color: '$darkGold900',
            },
          },

          ':hover': {
            backgroundColor: '$darkGold100',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              _svg: {
                color: '$darkGold900',
              },
            },
          },

          ':active': {
            backgroundColor: '$darkGold200',

            _icon: {
              color: '$darkGold900',
            },

            _spinner: {
              _svg: {
                color: '$darkGold900',
              },
            },
          },

          ':disabled': {
            backgroundColor: 'transparent',

            _text: {
              color: '$darkGold300',
            },
            _icon: {
              color: '$darkGold300',
            },
            _spinner: {
              _svg: {
                color: '$darkGold300',
              },
            },

            ':focusVisible': {
              backgroundColor: '$darkGold100',
              outlineColor: '$darkGold700',
            },
          },
        },
      },
    },
  ],

  props: {
    size: 'regular',
    variant: 'solid',
    colorScheme: 'cyan',
  },
});
