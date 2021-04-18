import React from 'react';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Wrapper, Select } from './styles';

export type OptionSelectorProps = {
  option: string;
  options?: string[];
  setSelectedOption(option: string): void;
  onOptionChange?(): void;
  style?: React.CSSProperties;
};

const OptionSelector: React.FC<OptionSelectorProps> = ({
  option,
  options = [],
  setSelectedOption,
  onOptionChange,
  style,
}) => {
  const handleChange = (
    target: EventTarget & { name?: string | undefined; value: unknown },
  ) => {
    const { value } = target;
    setSelectedOption(value as string);
    if (onOptionChange) onOptionChange();
  };

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
          onChange={({ target }) => handleChange(target)}
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
