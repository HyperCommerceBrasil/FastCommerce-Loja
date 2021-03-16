import styled from 'styled-components';
import { FaShoppingCart as BaseFaShoppingCart } from 'react-icons/fa';
import { Colors, Spacings } from '../../utils';

const defaultProductImageNotFound =
  'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

const { short } = Spacings;

type ImgProps = {
  imageURL?: string;
};

export const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 300px;
  height: 300px;
  box-shadow: 0 0 14px #bbbbbb;

  &:hover {
    cursor: pointer;
    width: 320px;
    height: 320px;
  }
`;

export const ImageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 60%;
  width: 100%;
  background-color: ${Colors.light?.environment.main};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Img = styled.div<ImgProps>`
  display: flex;
  flex: 1;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  ${({ imageURL = defaultProductImageNotFound }) =>
    `background-image: url(${imageURL});`}

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
  padding: 12px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${Colors.light?.environment.lighter};
`;

export const InformationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Category = styled.p`
  font-weight: 300;
`;

export const Title = styled.h3`
  font-weight: 500;
`;

export const Price = styled.h6`
  font-weight: 500;
`;

export const AddCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: ${short}px;
`;

export const AddCart = styled.button`
  border: none;
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
