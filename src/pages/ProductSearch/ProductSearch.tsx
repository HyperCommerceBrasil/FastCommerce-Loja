import React from 'react';
import { TextField } from '@material-ui/core';
import {
  Categories,
  Footer,
  Header,
  OptionSelector,
  ContentWrapper,
  ProductSearchListing,
} from '../../components';
import { SearchWrapper, Wrapper } from './styles';
import { OptionSelectorProps } from '../../components/OptionSelector';

type ProductSearchProps = {
  hasMore: boolean;
  itemsAmmountOnPage?: number;
  handleSearchTextChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void;
  searchText: string;
  next?(): void;
  products: Product[];
};

const ProductSearch: React.FC<ProductSearchProps & OptionSelectorProps> = ({
  products,
  next = () => ({}),
  hasMore = false,
  handleSearchTextChange = () => ({}),
  searchText,
  ...optionSelectorProps
}) => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <SearchWrapper>
          <OptionSelector {...optionSelectorProps} />
          <TextField
            fullWidth
            placeholder="Pesquisar"
            variant="outlined"
            value={searchText}
            onChange={e => handleSearchTextChange(e)}
          />
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
