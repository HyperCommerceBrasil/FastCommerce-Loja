import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { useParams } from 'react-router';
import { Wrapper, Select } from './styles';
import { GlobalCategoriesContext } from '../../contexts';

type OptionSelectorProps = {
  query?: string;
};

const OptionSelector: React.FC<OptionSelectorProps> = () => {
  const { query = 'Coleção Padrão' } = useParams<OptionSelectorProps>();
  const { categories } = useContext(GlobalCategoriesContext);
  const [category, setCategory] = useState(query);

  const handleChange = (
    target: EventTarget & { name?: string | undefined; value: unknown },
  ) => {
    const { value } = target;
    setCategory(value as string);
  };

  useEffect(() => {
    setCategory(query);
  }, [query]);

  return (
    <Wrapper>
      <FormControl fullWidth variant="outlined">
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
