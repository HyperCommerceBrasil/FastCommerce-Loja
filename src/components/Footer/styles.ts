import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { insane, giant, medium, short, smaller } = Spacings;

export const Wrapper = styled.div`
  background-color: ${Colors.light?.environment.main};
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: ${giant}px ${insane}px;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  margin: ${medium}px 0;
`;

export const Text = styled.p``;

export const Email = styled.a`
  font-weight: 700;
  color: ${Colors.light?.text.main};
  text-decoration: none;
  margin: ${medium}px 0;
`;

export const Link = styled.a`
  color: ${Colors.light?.text.main};
  text-decoration: none;
  margin: ${smaller}px 0;
`;

export const Subtitle = styled.h4``;

export const Input = styled.input`
  font-size: 1.4rem;
  padding: ${medium}px;
  border: none;
  border-radius: 5px;
  margin: ${short}px 0;
`;
