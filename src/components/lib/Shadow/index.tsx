import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {
  shadowWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

const TextInput: FC<Props> = ({ shadowWrapperProps, children }) => {
  return <Wrapper {...shadowWrapperProps}>{children}</Wrapper>;
};

export default TextInput;
