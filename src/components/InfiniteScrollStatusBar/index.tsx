import React from 'react';
import { StatusMessage, Wrapper } from './styles';

type InfiniteScrollStatusBarProps = {
  statusMessage?: string;
};

const InfiniteScrollStatusBar: React.FC<InfiniteScrollStatusBarProps> = ({
  statusMessage,
  children,
}) => (
  <Wrapper>
    {children || <StatusMessage>{statusMessage}</StatusMessage>}
  </Wrapper>
);

export default InfiniteScrollStatusBar;
