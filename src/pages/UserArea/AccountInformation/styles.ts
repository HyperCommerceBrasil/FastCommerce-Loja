import styled from 'styled-components';
import { Breakpoints, Colors, Spacings } from '../../../utils';

const { medium } = Spacings;
const { tablet } = Breakpoints;

export const AccountInformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${medium}px;
  width: 100%;

  @media (max-width: ${tablet}px) {
    display: unset;
    justify-content: unset;
  }
`;

export const AccountInformationSubtitle = styled.h2`
  color: ${Colors.light?.text.main};
`;
