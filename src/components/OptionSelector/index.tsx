import React, { useContext, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Wrapper } from './styles';
import { GlobalCategoriesContext } from '../../contexts';

const OptionSelector: React.FC = () => {
  const { categories } = useContext(GlobalCategoriesContext);
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
          {categories.map(({ id, name }) => (
            <MenuItem key={id} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default OptionSelector;
