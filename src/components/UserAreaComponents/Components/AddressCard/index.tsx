import React from 'react';
import { If } from '../../../lib';
import {
  ContentWrapper,
  Description,
  Linker,
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
  onEditPress?(address?: UserAddress): void;
  onDeletePress?(): Promise<void>;
  onDefineDefaultPress?(): void;
  address?: UserAddress;
};

const AddressCard: React.FC<Props> = ({
  isNew = false,
  onNewPress = () => ({}),
  onEditPress,
  onDeletePress,
  onDefineDefaultPress,
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
        <ContentWrapper isDefault={address?.addressDefault}>
          <Title>{address?.name}</Title>
          <Description>Rua: {address?.street}</Description>
          <Description>Número: {address?.number}</Description>
          <Description>Bairro: {address?.district}</Description>
          <Description>CEP: {address?.cep}</Description>
          <Description>UF: {address?.uf}</Description>
          <Description>Cidade: {address?.city}</Description>
        </ContentWrapper>
        <OptionsWrapper>
          <Linker
            isDefault={address?.addressDefault}
            onClick={() => (onEditPress ? onEditPress(address) : {})}
          >
            Editar
          </Linker>
          <Linker isDefault={address?.addressDefault} onClick={onDeletePress}>
            Excluir
          </Linker>
          <If condition={!address?.addressDefault}>
            <Linker onClick={onDefineDefaultPress}>Definir como padrão</Linker>
          </If>
        </OptionsWrapper>
      </Wrapper>
    )}
  </>
);

export default AddressCard;
