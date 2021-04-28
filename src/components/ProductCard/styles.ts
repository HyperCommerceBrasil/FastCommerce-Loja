import styled from 'styled-components';
import { FaShoppingCart as BaseFaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Colors, Spacings, Breakpoints } from '../../utils';
import { IMAGE } from '../../utils/enums';

const defaultProductImageNotFound =
  'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

const { short, huge } = Spacings;
const { laptop, fhd, tablet } = Breakpoints;

type ImgProps = {
  imageURL?: string | undefined;
};

export const Wrapper = styled.div`
  margin: ${huge}px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 18vw;
  height: 300px;
  box-shadow: 0 0 24px #cccccc;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 14px ${Colors.light?.primary.lighter};
  }

  @media (max-width: ${fhd}px) {
    width: 25vw;
  }

  @media (max-width: ${laptop}px) {
    width: 35vw;
  }

  @media (max-width: ${tablet}px) {
    width: 60vw;
  }
`;

export const ImageWrapper = styled(Link)`
  display: flex;
  height: 150px;
  width: 100%;
  background-color: ${Colors.light?.text.lighter};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Img = styled.div<ImgProps>`
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  ${({ imageURL = IMAGE.NOT_FOUND }) => `background-image: url(${imageURL});`}

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 45%;
  padding: ${short}px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${Colors.light?.environment.main};
  text-overflow: ellipsis;
`;

export const InformationList = styled(Link)`
  overflow: hidden;
  word-wrap: break-word;
  display: flex;
  flex: 1;
  flex-direction: column;
  text-decoration: none;
  line-height: 1.5;
`;

export const Category = styled.p`
  color: ${Colors.light?.text.main};
  font-weight: 300;
`;

export const Title = styled.h3`
  color: ${Colors.light?.text.main};
  font-size: 18px;
`;

export const Price = styled.h4`
  color: ${Colors.light?.text.main};
  font-weight: 300;
  font-size: 18px;
`;

export const AddCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: flex-end;
  margin-left: ${short}px;
`;

export const AddCart = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${Colors.light?.primary.main};
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light?.primary.darker};
  }
`;

export const FaShoppingCart = styled(BaseFaShoppingCart)`
  color: ${Colors.light?.text.lighter};
`;
