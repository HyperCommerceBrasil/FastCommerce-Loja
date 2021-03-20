import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { large } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
`;

export const ScrollabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;

export const CategoryWrapper = styled.button`
  background-color: ${Colors.light?.environment.main};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${large};
  min-width: 200px;

  &:hover {
    background-color: ${Colors.light?.environment.dark};
    cursor: pointer;
  }
`;

export const CategoryText = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${Colors.light?.text.main};
`;
