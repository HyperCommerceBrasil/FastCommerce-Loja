import React, { useState } from 'react';
import { DRAWER_VALUES } from '../../utils/enums';
import {
  IconWrapper,
  OptionWrapper,
  FaClipboardList,
  FaInfo,
  TextWrapper,
  Text,
  Wrapper,
  IoLocation,
} from './styles';

type Props = {
  externDrawerState?: DrawerState[];
  onChangeActiveState?(activeState: DrawerOptions): void;
  onChangeExternDrawerState?(activeState: DrawerState[]): void;
};

const defaultDrawer: DrawerState[] = [
  {
    id: 't134t1341d1345g54h13h14f34167u451fg',
    isActive: true,
    label: 'Meus pedidos',
    icon: <FaClipboardList />,
    value: DRAWER_VALUES.ORDERS,
  },
  {
    id: '4f1h80734y50t870387gt1308t710374134',
    isActive: false,
    label: 'Endereços',
    icon: <FaInfo />,
    value: DRAWER_VALUES.ADRESSES,
  },
  {
    id: '348712y340873489677fw9e76rfg97e46tg',
    isActive: false,
    label: 'Informações da Conta',
    icon: <IoLocation />,
    value: DRAWER_VALUES.ACCOUNT_INFORMATION,
  },
];

const Drawer: React.FC<Props> = ({
  externDrawerState,
  onChangeActiveState,
  onChangeExternDrawerState,
}) => {
  const [drawerStateLocal, setDrawerState] = useState(
    externDrawerState || defaultDrawer,
  );

  const isAlreadyActive = (id: string) => {
    let iterator = 0;
    while (iterator < drawerStateLocal.length) {
      if (
        drawerStateLocal[iterator].id === id &&
        drawerStateLocal[iterator].isActive === true
      )
        return true;
      iterator += 1;
    }
    return false;
  };

  const handleOnChangeActiveStateChange = (activeState: DrawerOptions) => {
    if (onChangeActiveState) onChangeActiveState(activeState);
  };

  const handleOnChangeExternDrawerState = (drawerState: DrawerState[]) => {
    if (onChangeExternDrawerState) onChangeExternDrawerState(drawerState);
  };

  const handleOptionClick = (idToEdit: string) => {
    if (isAlreadyActive(idToEdit)) return;

    const updatedDrawerState = drawerStateLocal.map(drawerStateItem => {
      const updatedObject = drawerStateItem;

      if (updatedObject.id === idToEdit) {
        updatedObject.isActive = !updatedObject.isActive;
        handleOnChangeActiveStateChange(updatedObject.value);
      } else if (updatedObject.isActive)
        updatedObject.isActive = !updatedObject.isActive;

      return updatedObject;
    });

    setDrawerState(updatedDrawerState);
    handleOnChangeExternDrawerState(updatedDrawerState);
  };

  return (
    <Wrapper>
      {drawerStateLocal.map(({ id, isActive, label, icon }) => (
        <OptionWrapper
          key={id}
          onClick={() => handleOptionClick(id)}
          isActive={isActive}
        >
          <IconWrapper>{icon || '🃏'}</IconWrapper>
          <TextWrapper>
            <Text>{label}</Text>
          </TextWrapper>
        </OptionWrapper>
      ))}
    </Wrapper>
  );
};

export default Drawer;
