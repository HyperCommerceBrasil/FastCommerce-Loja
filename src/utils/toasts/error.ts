import React from 'react';
import { toast } from 'react-toastify';
import { Colors, Spacings } from '..';

const { small } = Spacings;

export const error = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'success',
    style: {
      backgroundColor: Colors.light?.error,
      color: Colors.light?.text.lighter,
      margin: small,
    },
    progressStyle: {
      backgroundColor: Colors.light?.environment.lighter,
    },
    bodyStyle: { backgroundColor: Colors.light?.error },
  });
};
export default error;
