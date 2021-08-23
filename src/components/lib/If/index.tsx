import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {
  condition?: boolean;
};

const TextInput: FC<Props> = ({ condition, children }) => (
  <Wrapper condition={condition}>{children}</Wrapper>
);

export default TextInput;
