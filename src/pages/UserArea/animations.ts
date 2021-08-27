import { keyframes } from 'styled-components';

const closed = keyframes`
  0% { width: 300px; opacity: 1; display: flex; }
  100% { width: 0px; opacity: 0; display: none }
`;

const opened = keyframes`
  0% { width: 0px; opacity: 0; display: flex }
  100% { width: 400px; opacity: 1; }
`;

const none = keyframes`
  100% { width: 0px; opacity: 0; display: none }
`;

export const NewAddressFormAnimations = {
  opened,
  closed,
  none,
};
