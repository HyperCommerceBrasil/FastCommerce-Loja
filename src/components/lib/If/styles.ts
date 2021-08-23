import styled from 'styled-components';

type Props = {
  condition?: boolean;
};

export const Wrapper = styled.div<Props>`
  display: ${({ condition }) => (condition ? 'unset' : 'none')};
`;
