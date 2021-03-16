import styled from 'styled-components';
import WhiteBackground from '../../assets/img/fundo-branco-elegante-com-linhas-brilhantes_1017-17580.png';
import { Colors, Spacings } from '../../utils';

const { insane } = Spacings;

export const Wrapper = styled.div`
  /* background: linear-gradient(
    135deg,
    ${Colors.light?.environment.darker} 0%,
    ${Colors.light?.primary.main} 100%
  ); */
  /* background-color: #f16; */
  background: url(${WhiteBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  align-items: center;
`;

export const BuyerWrapper = styled.div`
  margin: 0 ${insane}px;
`;

export const BuyerOption = styled.div`
  flex-direction: column;
  margin: ${insane}px;
  padding-bottom: ${2 * insane}px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  margin-bottom: ${insane}px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 960px;
`;
