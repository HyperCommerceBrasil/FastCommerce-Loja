import React, { useContext, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { useParams } from 'react-router';
import { Wrapper, Select } from './styles';
import { GlobalCategoriesContext } from '../../contexts';

type OptionSelectorParams = {
  query?: string;
};

type OptionSelectorProps = {
  category: string;
  setCategory(category: string): void;
  style?: React.CSSProperties;
};

const OptionSelector: React.FC<OptionSelectorProps> = ({
  category,
  setCategory,
  style,
}) => {
  const { query = 'Coleção Padrão' } = useParams<OptionSelectorParams>();
  const { categories } = useContext(GlobalCategoriesContext);

  const handleChange = (
    target: EventTarget & { name?: string | undefined; value: unknown },
  ) => {
    const { value } = target;
    setCategory(value as string);
  };

  useEffect(() => {
    setCategory(query);
  }, [query, setCategory]);

  return (
    <Wrapper style={style}>
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
