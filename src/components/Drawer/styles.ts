import styled from 'styled-components';
import {
  FaClipboardList as FaClipboardListBase,
  FaInfo as FaInfoBase,
} from 'react-icons/fa';
import { IoLocation as IoLocationBase } from 'react-icons/io5';
import { Colors, Spacings, Radius, Breakpoints } from '../../utils';

const { smaller, small } = Spacings;
const { smallRadius } = Radius;
const { tablet } = Breakpoints;

type OptionProps = {
  isActive: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${smaller}px ${small}px;
  width: 170px;

  /* background-color: #1f6; */
  @media (max-width: ${tablet}px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: scroll;
  }
`;

export const OptionWrapper = styled.button<OptionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 140px;
  padding: ${smaller}px;
  border-radius: ${smallRadius}px;
  margin: ${smaller}px 0;
  color: ${({ isActive }) =>
    isActive ? Colors.light?.text.lighter : Colors.light?.text.main};

  background-color: ${({ isActive }) =>
    isActive ? Colors.light?.primary.main : 'transparent'};
  transition: 0.2s;
  &:hover {
    color: ${Colors.light?.text.lighter};
    background-color: ${Colors.light?.primary.darker};
    cursor: pointer;
  }

  @media (max-width: ${tablet}px) {
    margin: 0 ${smaller}px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 18px;
`;

export const FaClipboardList = styled(FaClipboardListBase)``;

export const FaInfo = styled(FaInfoBase)``;

export const IoLocation = styled(IoLocationBase)``;

export const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-left: ${smaller}px;
  /* justify-content: center; */
`;

export const Text = styled.p``;
