import React from 'react';
import * as CheckboxBase from '@radix-ui/react-checkbox';
import s from './Checkbox.module.scss';
import { CheckIcon } from '@radix-ui/react-icons';

export interface CheckboxProps {
  label: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={s.wrapper} htmlFor="c1">
      <CheckboxBase.Root id="c1" className={s.base_checkbox} defaultChecked>
        <CheckboxBase.Indicator className={s.base_icon}>
          <CheckIcon />
        </CheckboxBase.Indicator>
      </CheckboxBase.Root>
      {props.label}
    </label>
  );
};

export default Checkbox;
