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
  flex-direction: column;
`;

export const DefaultDescriptionWrapper = styled.div`
  display: flex;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img.attrs<ImgProps>(
  ({ src = defaultProductImageNotFound }) => ({
    src,
  }),
)`
  max-width: 40vw;

  @media (max-width: ${laptop}px) {
    max-width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2%;
  padding: ${giant}px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;

export const Title = styled.h3`
  color: ${Colors.light?.text.main};
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
  margin: ${medium}px 0;
  color: ${Colors.light?.text.main};
`;

export const Price = styled.h2`
  margin: ${medium}px 0;
  color: ${Colors.light?.primary.main};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
  color: ${Colors.light?.text.main};
  font-size: 1.4rem;
  margin: 0 ${medium}px;
`;

export const CustomizedDescriptionWrapper = styled.div`
  z-index: 5;
  overflow-y: hidden;
  color: ${Colors.light?.text.main};
  padding: ${giant}px;
`;

export const CustomizedDescriptionTitle = styled.h2`
  margin: ${medium}px 0;
`;
