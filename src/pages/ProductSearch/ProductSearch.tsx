import React from 'react';
import { TextField } from '@material-ui/core';
import {
  Categories,
  Footer,
  Header,
  OptionSelector,
  ContentWrapper,
  ProductSearchListing,
  Cart,
  ButtonMain,
} from '../../components';
import { SearchInputWrapper, SearchWrapper, Wrapper } from './styles';
import { OptionSelectorProps } from '../../components/OptionSelector';

type ProductSearchProps = {
  hasMore: boolean;
  itemsAmmountOnPage?: number;
  handleSearchClick(name: string): void;
  handleCategoryChange(name: string): void;
  next?(): void;
  products: Product[];
  searchValue: string;
  setSearchValue(value: string): void;
};

const ProductSearch: React.FC<ProductSearchProps & OptionSelectorProps> = ({
  products,
  next = () => ({}),
  hasMore = false,
  handleSearchClick,
  handleCategoryChange,
  setSearchValue,
  searchValue,
  ...optionSelectorProps
}) => {
  return (
    <Wrapper>
      <Header onSearchName={handleSearchClick} />
      <Categories handleOptionPress={handleCategoryChange} />
      <Cart />
      <ContentWrapper>
        <SearchWrapper>
          <SearchInputWrapper>
            <OptionSelector {...optionSelectorProps} />
          </SearchInputWrapper>
          <SearchInputWrapper>
            <TextField
              fullWidth
              placeholder="Pesquisar"
              variant="outlined"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value as string)}
            />
          </SearchInputWrapper>
          <SearchInputWrapper>
            <ButtonMain onClick={() => handleSearchClick(searchValue)}>
              Pesquisar
            </ButtonMain>
          </SearchInputWrapper>
        </SearchWrapper>
        <ProductSearchListing
          products={products}
          next={next}
          hasMore={hasMore}
        />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default ProductSearch;
