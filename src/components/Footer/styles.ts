import styled from 'styled-components';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { medium, short, smaller } = Spacings;
const { laptop } = Breakpoints;

export const Wrapper = styled.div`
  background-color: ${Colors.light?.environment.main};
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: ${short}px;
`;

export const Title = styled.h3`
  color: ${Colors.light?.text.main};
  font-size: 1.8rem;
  margin: ${medium}px 0;

  @media (max-width: ${laptop}px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  color: ${Colors.light?.text.main};
  @media (max-width: ${laptop}px) {
    text-align: center;
  }
`;

export const Email = styled.a`
  font-weight: 700;
  color: ${Colors.light?.text.main};
  text-decoration: none;
  margin: ${medium}px 0;

  @media (max-width: ${laptop}px) {
    text-align: center;
  }
`;

export const Link = styled.a`
  color: ${Colors.light?.text.main};
  text-decoration: none;
  margin: ${smaller}px 0;

  @media (max-width: ${laptop}px) {
    text-align: center;
  }
`;

export const Subtitle = styled.h4`
  color: ${Colors.light?.text.main};
  @media (max-width: ${laptop}px) {
    text-align: center;
  }
`;

export const SignNewsletterWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: ${medium}px;
  border: none;
  border-radius: 5px;
  margin: ${short}px 0;
`;

export const ToastSuccessMessage = styled.p`
  color: ${Colors.light?.text.darker};
`;

export const ToastErrorMessage = styled.p`
  color: ${Colors.light?.text.lighter};
`;
