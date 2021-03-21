import styled from 'styled-components';
import WhiteBackground from '../../assets/img/fundo-branco-elegante-com-linhas-brilhantes_1017-17580.png';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { laptop, tablet } = Breakpoints;
const { insane, medium } = Spacings;

export const Wrapper = styled.div`
  background: url(${WhiteBackground});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${laptop}px) {
    flex-direction: column-reverse;
  }
`;

export const BuyerWrapper = styled.div``;

export const BuyerOption = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${insane}px;
  padding-bottom: ${2 * insane}px;

  @media (max-width: ${laptop}px) {
    align-items: center;
    padding-bottom: ${insane}px;
    margin: ${insane}px ${medium}px;
  }
`;

export const Title = styled.h2`
  color: ${Colors.light?.text.darker};
  font-weight: 500;
  font-size: 2.4rem;
  margin-bottom: ${insane}px;

  @media (max-width: ${laptop}px) {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: ${tablet}px) {
    font-size: 1.8rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 960px;
`;
