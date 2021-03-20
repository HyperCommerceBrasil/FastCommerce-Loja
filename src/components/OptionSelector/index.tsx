import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Wrapper } from './styles';

const OptionSelector: React.FC = () => {
  const [category, setCategory] = useState('');

  const handleChange = (
    target: EventTarget & { name?: string | undefined; value: unknown },
  ) => {
    const { value } = target;
    setCategory(value as string);
  };
  return (
    <Wrapper>
      <FormControl variant="outlined" className="some_class_name">
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          placeholder="Categoria"
          label="Categoria"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={({ target }) => handleChange(target)}
        >
          <MenuItem value="10">Ten</MenuItem>
          <MenuItem value="20">Twenty</MenuItem>
          <MenuItem value="30">Thirty</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default OptionSelector;
