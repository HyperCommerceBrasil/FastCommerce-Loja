import React from 'react';
import {
  ContentWrapper,
  Description,
  Link,
  NewAddressWrapper,
  NewWrapper,
  OptionsWrapper,
  RiAddCircleLine,
  Title,
  Wrapper,
} from './styles';

type Props = {
  isNew?: boolean;
  onNewPress?(): void;
  address?: Partial<UserAddress>;
};

const AddressCard: React.FC<Props> = ({
  isNew = false,
  onNewPress,
  address,
}) => (
  <>
    {isNew ? (
      <NewAddressWrapper>
        <NewWrapper onClick={onNewPress}>
          <RiAddCircleLine />
          <Title>Novo Endereço</Title>
        </NewWrapper>
      </NewAddressWrapper>
    ) : (
      <Wrapper
        key={address?.id || '0'}
        isDefault={address?.addressDefault || false}
      >
        <ContentWrapper>
          <Title>{address?.name}</Title>
          <Description>Rua: {address?.street}</Description>
          <Description>Número: {address?.number}</Description>
          <Description>Bairro: {address?.district}</Description>
          <Description>CEP: {address?.cep}</Description>
          <Description>UF: {address?.uf}</Description>
          <Description>Cidade: {address?.city}</Description>
        </ContentWrapper>
        <OptionsWrapper>
          <Link href="/user/5t334">Editar</Link>
          <Link href="/user/5t334">Excluir</Link>
          {address?.addressDefault ? (
            <Link href="/user/5t334">Definir como padrão</Link>
          ) : (
            ''
          )}
        </OptionsWrapper>
      </Wrapper>
    )}
  </>
);

export default AddressCard;

// "id": "a69a9771-37a9-4ce9-9805-73561cb0f8df",
// "name": "Minha Casa 1",
// "customerId": "e1aabe93-8586-4151-8119-0a793e81d7a2",
// "cep": "978000000",
// "uf": "RS",
// "city": "São  Luiz Gonzaga",
// "street": "Rua Ernestp Alves",
// "district": "Monsenhor Wolski",
// "number": "1431",
// "addressDefault": false,
