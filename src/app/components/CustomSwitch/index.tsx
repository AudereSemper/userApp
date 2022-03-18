import React from 'react';
import { ICustomSwitchProps } from './types';
import { SwitchInput, SwitchLabel, SwitchButton } from './styles';

const CustomSwitch = ({ id, toggled, onChange }: ICustomSwitchProps) => (
  <>
    <SwitchInput
      id={id}
      type="checkbox"
      checked={toggled}
      onChange={onChange}
    />
    <SwitchLabel htmlFor={id}>
      <SwitchButton />
    </SwitchLabel>
  </>
);

export default CustomSwitch;
