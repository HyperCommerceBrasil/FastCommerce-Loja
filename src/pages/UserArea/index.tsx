import React from 'react';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  Cart,
  Drawer,
} from '../../components';
import { Wrapper } from './styles';

const UserArea: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <Cart />
      <ContentWrapper>
        <Drawer />
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
    </Wrapper>
  );
};

export default UserArea;
