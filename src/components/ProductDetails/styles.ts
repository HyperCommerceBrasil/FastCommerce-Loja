import styled from 'styled-components';
import { Colors, Spacings, Breakpoints } from '../../utils';

const { short, medium, giant } = Spacings;
const { tablet, laptop, fhd } = Breakpoints;

const defaultProductImageNotFound =
  'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

type ImgProps = {
  src?: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  flex: 1;
  min-width: 40vw;
  min-height: 40vh;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Image = styled.img.attrs<ImgProps>(
  ({ src = defaultProductImageNotFound }) => ({
    src,
  }),
)`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2%;
  padding: ${giant}px;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  font-size: 4rem;
  @media (max-width: ${fhd}px) {
    font-size: 3rem;
  }

  @media (max-width: ${laptop}px) {
    font-size: 2rem;
  }

  @media (max-width: ${tablet}px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  @media (max-width: ${fhd}px) {
    text-align: ce4ter;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${giant}px;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${laptop}px) {
    margin: ${giant}px;
  }
`;

export const CounterButton = styled.button`
  background-color: ${Colors.light?.primary.main};
  border-radius: 8px;
  padding: ${short}px;

  &:hover {
    cursor: pointer;
  }
`;

export const CounterValue = styled.p`
  font-size: 1.4rem;
  margin: 0 ${medium}px;
`;
