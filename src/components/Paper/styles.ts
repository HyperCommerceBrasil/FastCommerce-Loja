import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { huge } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  max-width: 400px;
  padding: ${huge}px;
  background-color: ${Colors.light?.text.lighter};

  box-shadow: 3px 4px 13px rgba(0, 0, 0, 0.19);
`;
