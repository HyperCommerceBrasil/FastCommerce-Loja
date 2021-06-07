import React, { useState } from 'react';
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

const defaultDrawer: DrawerState[] = [
  {
    id: 't134t1341d1345g54h13h14f34167u451fg',
    isActive: true,
    label: 'Meus pedidos',
    icon: <FaClipboardList />,
  },
  {
    id: '4f1h80734y50t870387gt1308t710374134',
    isActive: false,
    label: 'Endereços',
    icon: <FaInfo />,
  },
  {
    id: '348712y340873489677fw9e76rfg97e46tg',
    isActive: false,
    label: 'Informações da Conta',
    icon: <IoLocation />,
  },
];

const Drawer: React.FC = () => {
  const [drawerState, setDrawerState] = useState(defaultDrawer);

  const isAlreadyActive = (id: string) => {
    let iterator = 0;
    while (iterator < drawerState.length) {
      if (
        drawerState[iterator].id === id &&
        drawerState[iterator].isActive === true
      )
        return true;
      iterator += 1;
    }
    return false;
  };

  const handleOptionClick = (idToEdit: string) => {
    if (isAlreadyActive(idToEdit)) return;

    const updatedDrawerState = drawerState.map(drawerStateItem => {
      const updatedObject = drawerStateItem;

      if (updatedObject.id === idToEdit) {
        updatedObject.isActive = !updatedObject.isActive;
      } else if (updatedObject.isActive)
        updatedObject.isActive = !updatedObject.isActive;

      return updatedObject;
    });

    setDrawerState(updatedDrawerState);
  };

  return (
    <Wrapper>
      {drawerState.map(({ id, isActive, label, icon }) => (
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
