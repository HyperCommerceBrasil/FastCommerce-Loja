import styled from 'styled-components';
import { FaShoppingCart as BaseFaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Colors, Spacings, Breakpoints } from '../../utils';

const defaultProductImageNotFound =
  'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

const { short, huge } = Spacings;
const { laptop } = Breakpoints;

type ImgProps = {
  imageURL?: string;
};

export const Wrapper = styled.div`
  margin: ${huge}px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 18vw;
  height: 400px;
  box-shadow: 0 0 14px #bbbbbb;
  &:hover {
    cursor: pointer;
    width: 19vw;
  }

  @media (max-width: ${laptop}px) {
    width: 270px;

    &:hover {
      cursor: pointer;
      width: 280px;
    }
  }
`;

export const ImageWrapper = styled(Link)`
  display: flex;
  height: 60%;
  width: 100%;
  background-color: ${Colors.light?.text.lighter};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Img = styled.div<ImgProps>`
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  ${({ imageURL = defaultProductImageNotFound }) =>
    `background-image: url(${imageURL});`}

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40%;
  padding: 12px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${Colors.light?.environment.main};
`;

export const InformationList = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
`;

export const Category = styled.p`
  color: ${Colors.light?.text.main};
  font-weight: 300;
`;

export const Title = styled.h3`
  color: ${Colors.light?.text.main};
  font-weight: 500;
`;

export const Price = styled.h6`
  color: ${Colors.light?.text.main};
  font-weight: 500;
`;

export const AddCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: ${short}px;
`;

export const AddCart = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${Colors.light?.primary.main};

  &:hover {
    cursor: pointer;
    background-color: ${Colors.light?.primary.darker};
  }
`;

export const FaShoppingCart = styled(BaseFaShoppingCart)`
  color: ${Colors.light?.environment.lighter};
`;
