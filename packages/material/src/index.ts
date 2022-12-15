import './types/overrides';

export { theme } from './theme';
export type { Theme } from './theme';

// @mui/material exports
export { styled, useTheme } from '@mui/material/styles';
import { makeStyles as muiMakeStyles } from '@mui/styles';
/**
 * @deprecated in v2. This will be removed in v3, please migrate to the sx & styled utilities.
 */
export const makeStyles: typeof muiMakeStyles = (...args) => {
  console.warn(
    'makeStyles is deprecated in v2, and will be removed in v3. Please migrate to the sx and styled utilities.'
  );
  return muiMakeStyles(...args);
};

export { default as Box } from './components/Box';
export type { BoxProps } from './components/Box';

export { default as Background, useBackground, BackgroundProvider } from './components/Background';
export type {
  BackgroundColor,
  BackgroundProps,
  BackgroundProviderProps,
} from './components/Background';

export { default as Button, buttonClasses } from './components/Button';
export type { ButtonProps } from './components/Button';

export { default as Card } from './components/Card';
export type { CardProps, CardVariant } from './components/Card';

export { default as Container } from './components/Container';

export { default as Grid } from './components/Grid';
export type { GridProps } from './components/Grid';

export { default as Icon } from './components/Icon';
export type { IconProps } from './components/Icon';

export { default as Hidden } from './components/Hidden';
export type { HiddenProps } from './components/Hidden';

export { default as Spacer } from './components/Spacer';
export type { SpacerProps } from './components/Spacer';

export { default as InteractiveCard, interactiveCardClasses } from './components/InteractiveCard';
export type { InteractiveCardProps } from './components/InteractiveCard';

export { default as Link, NavLink } from './components/Links';
export type { LinkProps, NavLinkProps } from './components/Links';

export { default as Menu, MenuItem } from './components/Menu';
export type { MenuProps, MenuItemProps } from './components/Menu';

export { default as TextField, textfieldClasses } from './components/TextField';
export type { TextFieldProps } from './components/TextField';

export { default as Typography, typographyClasses } from './components/Typography';
export type { TypographyProps } from './components/Typography';

export { default as StylesProvider } from './components/StylesProvider';
export type { StylesProviderProps } from './components/StylesProvider';

export { default as ThemeProvider } from './components/ThemeProvider';
export type { ThemeProviderProps } from './components/ThemeProvider';

export { default as ToggleButton } from './components/ToggleButton';
export type { ToggleButtonProps } from './components/ToggleButton';
export { default as ToggleButtonGroup } from './components/ToggleButtonGroup';
export type { ToggleButtonGroupProps } from './components/ToggleButtonGroup';

<<<<<<< HEAD
export { default as RadioGroup } from './components/RadioGroup';
export type { RadioGroupProps } from './components/RadioGroup';
export { default as RadioButton } from './components/RadioButton';
export type { RadioButtonProps } from './components/RadioButton';
||||||| parent of 70891131 (Release RadioGroup, RadioButton & SelectionTile (#529))
// export { default as RadioGroup } from './components/RadioGroup';
// export type { RadioGroupProps } from './components/RadioGroup';
// export { default as RadioButton } from './components/RadioButton';
// export type { RadioButtonProps } from './components/RadioButton';
=======
export { default as RadioGroup } from './components/RadioGroup';
export type { RadioGroupProps } from './components/RadioGroup';
export { default as RadioButton, RadioTile, RadioLabel, RadioIndicator } from './components/Radio';
export type {
  RadioButtonProps,
  RadioTileProps,
  RadioLabelProps,
  RadioIndicatorProps,
} from './components/Radio';
export {
  default as SelectionTile,
  Root as SelectionTileRoot,
  Label as SelectionTileLabel,
} from './components/SelectionTile';
export type { SelectionTileProps } from './components/SelectionTile';
>>>>>>> 70891131 (Release RadioGroup, RadioButton & SelectionTile (#529))

export { default as useDeviceSize } from './hooks/useDeviceSize';
