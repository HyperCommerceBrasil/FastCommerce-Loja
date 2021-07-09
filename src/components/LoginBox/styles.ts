import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { default as ButtonMainBase } from '../ButtonMain';
import { Colors, Spacings } from '../../utils';

const { smaller, short, small, huge, meaningless } = Spacings;

type WrapperProps = {
  isShowing: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  z-index: 10;
  top: ${huge}px;
  width: 300px;
  position: absolute;

  display: ${({ isShowing }) => (isShowing ? 'flex' : 'none')};
  flex-direction: column;

  border-radius: 16px;
  padding: ${short}px;
  background-color: ${Colors.light?.environment.lighter};
  box-shadow: 3px 4px 13px rgba(0, 0, 0, 0.19);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${smaller}px;
  padding-bottom: ${smaller}px;
  margin-bottom: ${smaller}px;
  border-bottom: ${meaningless}px solid #dddddd;
`;

export const HeaderTitle = styled.h2`
  color: ${Colors.light?.text.main};
`;

export const FormWrapper = styled.div``;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: ${small}px;
  padding: 0 ${smaller}px;
`;

export const InputWrapper = styled.div`
  margin: ${short}px 0;
`;

export const TextFieldLabel = styled.h4`
  text-align: left;
  font-weight: 300;
  margin-bottom: ${meaningless}px;
  color: ${Colors.light?.text.main};
`;

export const ButtonMain = styled(ButtonMainBase)`
  background-color: ${Colors.light?.text.darker};

  &:hover {
    cursor: pointer;
    color: ${Colors.light?.primary.main};
  }
`;

export const LoginBoxLink = styled(Link)`
  color: ${Colors.light?.primary.main};

  &:hover {
    cursor: pointer;
    color: ${Colors.light?.primary.lighter};
  }
`;
