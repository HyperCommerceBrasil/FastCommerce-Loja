import React from 'react';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Wrapper, Select } from './styles';

export type OptionSelectorProps = {
  option: string;
  options?: string[];
  onOptionChange(
    target: EventTarget & { name?: string | undefined; value: unknown },
  ): void;
  style?: React.CSSProperties;
};

const OptionSelector: React.FC<OptionSelectorProps> = ({
  option,
  options = [],
  onOptionChange,
  style,
}) => {
  return (
    <Wrapper style={style}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          placeholder="Categoria"
          label="Categoria"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          onChange={({ target }) => onOptionChange(target)}
        >
          {options.map(arrayOption => (
            <MenuItem key={`arrayOption_${arrayOption}`} value={arrayOption}>
              {arrayOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default OptionSelector;
