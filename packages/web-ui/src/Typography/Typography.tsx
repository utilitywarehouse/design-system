import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import Heading, { HeadingProps, headingVariantMapping } from '../Heading';
import Text, { TextProps, textVariantMapping } from '../Text';

type DefaultTypographyComponent = 'p';

interface CustomTypographyProps {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  variant: MuiTypographyProps['variant'];
  component?: React.ElementType;
}

interface TypographyTypeMap<D extends React.ElementType = DefaultTypographyComponent, P = {}> {
  props: MuiTypographyProps<D, P> & CustomTypographyProps;
  defaultComponent: D;
}

type TypographyProps<
  D extends React.ElementType = DefaultTypographyComponent,
  P = {}
> = OverrideProps<TypographyTypeMap<D, P>, D>;

const Typography = forwardRef(function Typography(
  { color = 'primary', variant, component = 'p', ...props },
  ref
) {
  if (variant && Object.keys(textVariantMapping).includes(variant)) {
    return (
      <Text
        ref={ref}
        color={color as TextProps['color']}
        variant={variant as TextProps['variant']}
        component={component}
        {...props}
      />
    );
  }
  if (variant && Object.keys(headingVariantMapping).includes(variant)) {
    return (
      <Heading
        ref={ref}
        color={color as HeadingProps['color']}
        variant={variant as HeadingProps['variant']}
        component={component}
        {...props}
      />
    );
  }
  return <MuiTypography ref={ref} {...props} />;
}) as OverridableComponent<TypographyTypeMap>;

export default Typography;
export type {
  DefaultTypographyComponent,
  CustomTypographyProps,
  TypographyTypeMap,
  TypographyProps,
};
