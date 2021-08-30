import styled from 'styled-components';
import { RiAddCircleLine as RiAddCircleLineBase } from 'react-icons/ri';
import { Colors, Spacings, Radius, Breakpoints } from '../../../../utils';

const { medium, small, smaller, meaningless } = Spacings;
const { mediumRadius } = Radius;
const { tablet } = Breakpoints;

type WrapperProps = {
  isDefault?: boolean;
};

type ContentWrapperProps = {
  isDefault?: boolean;
};

type LinkerProps = {
  isDefault?: boolean;
};

const defaultCardWidth = '330px';
const defaultCardHeight = '210px';

const handleIsDefaultBorder = (isDefault?: boolean) =>
  isDefault ? Colors.light?.primary.main : Colors.light?.environment.dark;

const handleIsDefaultBackgroundColor = (isDefault?: boolean) =>
  isDefault ? Colors.light?.primary.main : Colors.light?.environment.lighter;

const handleIsDefaultColor = (isDefault?: boolean) =>
  isDefault ? Colors.light?.text.lighter : Colors.light?.text.main;

const handleLinkerIsDefaultColor = (isDefault?: boolean) =>
  isDefault ? Colors.light?.text.lighter : Colors.light?.primary.main;

const handleLinkerIsDefaultBorderColor = (isDefault?: boolean) =>
  isDefault ? Colors.light?.text.lighter : Colors.light?.primary.main;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  width: ${defaultCardWidth};
  height: ${defaultCardHeight};
  margin: ${small}px;
  background-color: ${({ isDefault }) =>
    handleIsDefaultBackgroundColor(isDefault)};
  padding: ${medium}px;

  border: 2px solid ${({ isDefault }) => handleIsDefaultBorder(isDefault)};

  transition: 0.3s;

  border-radius: ${mediumRadius}px;

  @media (max-width: ${tablet}px) {
    width: 100%;
    height: auto;
  }
`;

export const NewAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${defaultCardWidth};
  height: ${defaultCardHeight};
  margin: ${small}px;
  background-color: ${Colors.light?.environment.lighter};
  padding: ${medium}px;
  border-radius: ${mediumRadius}px;
  border: 2px dashed ${Colors.light?.primary.lighter};

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: ${Colors.light?.primary.main};
    border: 2px dashed ${Colors.light?.primary.main};
  }

  @media (max-width: ${tablet}px) {
    width: 100%;
    /* height: ${defaultCardHeight}; */
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  flex: 1;
  flex-direction: column;

  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${medium}px;

  color: ${({ isDefault }) => handleIsDefaultColor(isDefault)};
`;

export const Title = styled.h3`
  margin-bottom: ${smaller}px;
`;

export const Description = styled.p``;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const OptionsSubWrapper = styled.div`
  display: flex;
`;

export const Linker = styled.button<LinkerProps>`
  background-color: unset;
  font-size: 1rem;
  border: 1px solid
    ${({ isDefault }) => handleLinkerIsDefaultBorderColor(isDefault)};
  border-radius: ${mediumRadius}px;
  padding: ${meaningless}px ${small}px;
  color: ${({ isDefault }) => handleLinkerIsDefaultColor(isDefault)};
  margin: ${small}px ${small}px 0 0;

  &:hover {
    cursor: pointer;
  }
`;

export const NewWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${Colors.light?.primary.lighter};

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: ${Colors.light?.primary.main};
  }
`;

export const RiAddCircleLine = styled(RiAddCircleLineBase).attrs({
  size: 50,
})`
  margin: ${small}px;
`;
