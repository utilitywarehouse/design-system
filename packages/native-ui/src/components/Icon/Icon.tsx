/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { createIcon } from '@gluestack-ui/icon';
import React, { useMemo } from 'react';
import { Svg } from 'react-native-svg';
import type IconProps from './Icon.props';
import { useStyles } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';

const PrimitiveIcon = React.forwardRef<React.ElementRef<typeof Svg>, IconProps>(
  ({ height, width, fill, color, size, stroke, as: AsComp, ...props }, ref) => {
    const sizeProps = useMemo(() => {
      if (size) return { size };
      if (height && width) return { height, width };
      if (height) return { height };
      if (width) return { width };
      return {};
    }, [size, height, width]);

    const {
      theme: { colors, colorMode },
    } = useStyles();
    const colorValue: ColorValue = useMemo(() => getStyleValue(color, colors), [color, colorMode]);

    let colorProps = {};
    if (color) {
      colorProps = { ...colorProps, color: colorValue };
    }
    if (stroke) {
      colorProps = { ...colorProps, stroke };
    }
    if (fill) {
      colorProps = { ...colorProps, fill: fill };
    }
    if (AsComp) {
      return <AsComp ref={ref} {...sizeProps} {...colorProps} strokeWidth={0} {...props} />;
    }
    return (
      <Svg ref={ref} height={height} width={width} strokeWidth={0} {...colorProps} {...props} />
    );
  }
);

PrimitiveIcon.displayName = 'PrimitiveIcon';

export const Icon = createIcon({
  Root: PrimitiveIcon,
});

export default Icon;
