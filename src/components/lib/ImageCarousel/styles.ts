import styled from 'styled-components';
import { Breakpoints, IMAGE, Spacings, Colors, Radius } from '../../../utils';

const { laptop, tablet } = Breakpoints;
const { smallRadius } = Radius;
const { smaller } = Spacings;

const handleSmallImageWrapperIsActive = (isActive?: boolean) =>
  isActive ? Colors.light?.primary.main : Colors.light?.primary.lighter;

type ImgProps = {
  src?: string;
};

type SmallImageWrapperProps = {
  isActive?: boolean;
};

export const ImageWrapper = styled.div``;

export const SelectedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageDiv = styled.div<ImgProps>`
  background: url(${({ src }) => src || IMAGE.NOT_FOUND});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;

  max-width: 600px;
  max-height: 600px;
  width: 600px;
  height: 600px;

  @media (max-width: ${laptop}px) {
    max-width: 100%;
    height: 500px;
  }

  @media (max-width: ${tablet}px) {
    max-width: 100%;
    height: 320px;
  }
`;

export const SmallImagesCarousel = styled.div`
  padding: ${smaller}px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
`;

export const SmallImageWrapper = styled.button<SmallImageWrapperProps>`
  border-radius: ${smallRadius}px;
  padding: ${smaller}px;
  background-color: transparent;
  border: 2px solid
    ${({ isActive }) => handleSmallImageWrapperIsActive(isActive)};
  margin: ${smaller}px;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border-color: ${Colors.light?.primary.main};
  }
`;

export const SmallImage = styled.img.attrs<ImgProps>(
  ({ src = IMAGE.NOT_FOUND }) => ({
    src,
  }),
)`
  border-radius: ${smallRadius}px;
  max-width: 60px;
  max-height: 60px;
  height: 100%;
`;
