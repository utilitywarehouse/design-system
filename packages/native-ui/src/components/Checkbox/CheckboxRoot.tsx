import React, { forwardRef, useMemo } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Pressable, ViewStyle } from 'react-native';
import type CheckboxProps from './Checkbox.props';
import { CheckboxContext } from './Checkbox.context';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import { PressableRef } from '../../types';

const CheckboxRoot = forwardRef<
  PressableRef,
  CheckboxProps & { states?: { disabled?: boolean; checked?: boolean } }
>(({ children, style, states, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);
  const { disabled, checked } = states ?? {};

  const isDisabled = useCheckboxGroupContext()?.disabled ?? disabled;

  const value = useMemo(
    () => ({
      disabled: isDisabled,
      checked,
    }),
    [isDisabled, checked]
  );

  return (
    <CheckboxContext.Provider value={value}>
      <Pressable ref={ref} {...props} style={[styles.container, style as ViewStyle]}>
        {children}
      </Pressable>
    </CheckboxContext.Provider>
  );
});

CheckboxRoot.displayName = 'CheckboxRoot';

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: space[2],
  },
}));

export default CheckboxRoot;
