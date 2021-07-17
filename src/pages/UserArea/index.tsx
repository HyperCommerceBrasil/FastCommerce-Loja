import React, { useState } from 'react';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  Cart,
  Drawer,
  CartOrderCard,
} from '../../components';
import { DRAWER_VALUES } from '../../utils/enums';
import { DrawerSelectedWrapper, InternWrapper, Wrapper } from './styles';

const UserArea: React.FC = () => {
  const [activeState, setActiveState] = useState<DrawerOptions>(
    'ACCOUNT_INFORMATION',
  );

  const SelectedDrawerRenderFunctions = {
    [DRAWER_VALUES.ACCOUNT_INFORMATION]: () => (
      <CartOrderCard text={DRAWER_VALUES.ACCOUNT_INFORMATION} />
    ),
    [DRAWER_VALUES.ADRESSES]: () => (
      <CartOrderCard text={DRAWER_VALUES.ADRESSES} />
    ),
    [DRAWER_VALUES.ORDERS]: () => <CartOrderCard text={DRAWER_VALUES.ORDERS} />,
  };

  const renderActiveDrawerSelection =
    SelectedDrawerRenderFunctions[activeState];

  return (
    <Wrapper>
      <Header />
      <Categories />
      <Cart />
      <ContentWrapper>
        <InternWrapper>
          <Drawer onChangeActiveState={setActiveState} />
          <DrawerSelectedWrapper>
            {renderActiveDrawerSelection()}
          </DrawerSelectedWrapper>
        </InternWrapper>
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
    </Wrapper>
  );
};

export default UserArea;
