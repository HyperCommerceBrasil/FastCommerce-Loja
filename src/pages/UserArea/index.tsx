import React, { useState, useContext } from 'react';

import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  Drawer,
  Cart,
  CartOrderCard,
  AddressCard,
} from '../../components';
import { GlobalUserContext } from '../../contexts';
import { DRAWER_VALUES } from '../../utils/enums';
import {
  AddressComponentWrapper,
  DrawerSelectedWrapper,
  DrawerWrapper,
  InternWrapper,
  Wrapper,
} from './styles';

const adresses = [
  {
    id: 'a69a9771-37a9-4ce9-9805-73561cb0f8df',
    name: 'Minha Casa 1',
    customerId: 'e1aabe93-8586-4151-8119-0a793e81d7a2',
    cep: '978000000',
    uf: 'RS',
    city: 'São  Luiz Gonzaga',
    street: 'Rua Ernestp Alves',
    district: 'Monsenhor Wolski',
    number: '1431',
    addressDefault: false,
    created_at: '2021-07-25T18:57:05.630Z',
    updated_at: '2021-07-25T21:38:23.155Z',
  },
  {
    id: 'dacaa187-dce5-4376-b9d0-f602de81b2a6',
    name: 'Minha Casa 1',
    customerId: 'e1aabe93-8586-4151-8119-0a793e81d7a2',
    cep: '978000000',
    uf: 'RS',
    city: 'São  Luiz Gonzaga',
    street: 'Rua Ernestp Alves',
    district: 'Monsenhor Wolski',
    number: '1431',
    addressDefault: true,
    created_at: '2021-07-25T18:57:03.757Z',
    updated_at: '2021-07-25T21:38:23.160Z',
  },
  {
    id: '0f7007c8-a1b3-4757-9183-6172bceb9d59',
    name: 'Minha Casa',
    customerId: 'e1aabe93-8586-4151-8119-0a793e81d7a2',
    cep: '978000000',
    uf: 'RS',
    city: 'São  Luiz Gonzaga',
    street: 'Rua Ernesto Alves',
    district: 'Monsenhor Wolski',
    number: '1431',
    addressDefault: false,
    created_at: '2021-07-25T18:57:04.806Z',
    updated_at: '2021-07-25T21:38:48.399Z',
  },
];

const UserArea: React.FC = () => {
  const { user } = useContext(GlobalUserContext);
  const [activeState, setActiveState] = useState<DrawerOptions>(
    'ACCOUNT_INFORMATION',
  );

  const handleNewPress = () => ({});

  const addressesComponent = () => (
    <AddressComponentWrapper>
      <AddressCard key={0} isNew onNewPress={handleNewPress} />
      {adresses.map(address => (
        <AddressCard address={address} key={address.id || 0} />
      ))}
    </AddressComponentWrapper>
  );

  /**
   * This is defined to maintain functions for the selected option in drawer to render
   */
  const SelectedDrawerRenderFunctions = {
    [DRAWER_VALUES.ACCOUNT_INFORMATION]: () => (
      <CartOrderCard text={DRAWER_VALUES.ACCOUNT_INFORMATION} />
    ),
    [DRAWER_VALUES.ADRESSES]: addressesComponent,
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
          <DrawerWrapper>
            <Drawer onChangeActiveState={setActiveState} />
          </DrawerWrapper>
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
