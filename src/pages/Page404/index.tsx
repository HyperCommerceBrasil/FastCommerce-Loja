import React from 'react';
import { useHistory } from 'react-router';
import { ButtonMain } from '../../components';
import {
  ButtonWrapper,
  Message404Wrapper,
  Wrapper,
  Text,
  GifConfused,
  GifWrapper,
} from './styles';

const Page404: React.FC = () => {
  const { push } = useHistory();
  return (
    <Wrapper>
      <Message404Wrapper>
        <GifWrapper>
          <GifConfused src="https://media4.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif" />
        </GifWrapper>
        <Text>Eita... parece que saímos um pouco da rota!</Text>
        <Text>Bora voltar pra home?!</Text>
        <Text>😅</Text>
      </Message404Wrapper>
      <ButtonWrapper>
        <ButtonMain onClick={() => push('/')}>Bora!</ButtonMain>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Page404;
