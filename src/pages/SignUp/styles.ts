import styled from 'styled-components';
import { Colors, Breakpoints } from '../../utils';

const { laptop } = Breakpoints;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const RowContent = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f17;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImageUploadArea = styled.div`
  width: 30vw;
  border: 5px dashed #666;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${laptop}px) {
    flex-direction: column;
  }
`;

export const ImageUploadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f51;
`;
