import React, { forwardRef } from 'react';

import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../../Text';
import TextProps from '../../Text/Text.props';
import { Text as RNText } from 'react-native';

const ListHeadingSupportingText = forwardRef<RNText, TextProps>(({ children, ...props }, ref) => {
  return (
    <Text ref={ref} {...props} style={[styles.supportingText, props.style]}>
      {children}
    </Text>
  );
});

ListHeadingSupportingText.displayName = 'ListHeadingSupportingText';

const styles = StyleSheet.create(({ colors, lineHeights }) => ({
  supportingText: {
    color: colors.grey700,
    lineHeight: lineHeights.sm,
  },
}));

export default ListHeadingSupportingText;
