import styled from 'styled-components';
import { Colors, Radius, Spacings, Breakpoints } from '../../../../utils';

const { short, small } = Spacings;
const { smallRadius } = Radius;
const { tablet } = Breakpoints;

export const FormWrapper = styled.div`
  display: flex;
  border-radius: ${smallRadius}px;
  flex-direction: column;
  padding: ${short}px;

  border: 2px solid ${Colors.light?.primary.main};
  border-style: dashed;
  width: 100%;
  max-width: 600px;

  @media (max-width: ${tablet}px) {
    width: auto;
    max-width: unset;
    margin: ${small}px;
  }
`;
