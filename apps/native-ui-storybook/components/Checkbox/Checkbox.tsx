import React from 'react';
import {
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@utilitywarehouse/native-ui';

const CheckboxGroupBasic = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <CheckboxGroup
      aria-label="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group"
      gap="$2"
    >
      <Checkbox
        size={props.size}
        isInvalid={props.isInvalid}
        isIndeterminate
        value="Label 1"
        aria-label="Label 1"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-1"
        gap="$2"
      >
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label 1</CheckboxLabel>
      </Checkbox>
      <Checkbox
        isInvalid={props.isInvalid}
        size={props.size}
        aria-label="Label 2"
        value="Label 2"
        onChange={(isSelected: boolean) =>
          // eslint-disable-next-line no-console
          console.log(isSelected, '###')
        }
        nativeID="checkbox-2"
        gap="$2"
      >
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label 2</CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export { CheckIcon, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel };
