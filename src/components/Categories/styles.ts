import styled from 'styled-components';
import { Colors } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
`;

export const CategoryWrapper = styled.button`
  background-color: ${Colors.light?.environment.main};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

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
