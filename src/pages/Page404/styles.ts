import styled from 'styled-components';
import { Breakpoints, Colors, Spacings } from '../../utils';

const { large, medium, giant, insane } = Spacings;
const { laptop, tablet } = Breakpoints;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.light?.environment.main};
  padding: 0 ${giant}px;
`;

export const Message404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${laptop}px) {
    padding-bottom: ${insane}px;
  }
`;

export const GifWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${giant}px 0;
`;

export const ButtonWrapper = styled.div`
  margin: ${medium}px 0;
  @media (max-width: ${laptop}px) {
    position: fixed;
    bottom: ${medium}px;
    margin: ${large}px 0;
  }
`;

export const GifConfused = styled.img`
  align-self: center;
  width: 100%;
`;

export const Text = styled.h1`
  text-align: center;
  color: ${Colors.light?.text.main};

  @media (max-width: ${tablet}px) {
    font-size: 1.4rem;
  }
`;
