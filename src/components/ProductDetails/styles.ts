import styled from 'styled-components';
import { ButtonMain as ButtonMainBase } from '..';
import { Colors, Spacings, Breakpoints } from '../../utils';
import { IMAGE } from '../../utils/enums';

const { medium, giant, insane } = Spacings;
const { tablet, laptop, fhd } = Breakpoints;

type ImgProps = {
  src?: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DefaultDescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${giant}px ${insane}px;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }

  @media (max-width: ${tablet}px) {
    flex-direction: column;
    padding: ${giant}px ${medium}px;
  }
`;

export const ImageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img.attrs<ImgProps>(
  ({ src = IMAGE.NOT_FOUND }) => ({
    src,
  }),
)`
  max-width: 400px;
  max-height: 400px;

  @media (max-width: ${laptop}px) {
    max-width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  padding: 0 ${giant}px;

  @media (max-width: ${laptop}px) {
    padding: ${giant}px 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;

export const Title = styled.h1`
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

  @media (max-width: ${laptop}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  margin-right: ${giant}px;

  @media (max-width: ${laptop}px) {
    margin: ${giant}px;
  }
`;

export const ButtonMain = styled(ButtonMainBase)`
  @media (max-width: ${laptop}px) {
    display: none;
  }
`;

export const CustomizedDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  color: ${Colors.light?.text.main};
`;

export const CustomizedDescriptionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 300;
  margin: ${medium}px 0;
`;
