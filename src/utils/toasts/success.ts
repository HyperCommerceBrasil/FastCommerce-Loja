import React from 'react';
import { toast } from 'react-toastify';
import { Colors, Spacings } from '..';

const { small } = Spacings;

export const success = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'success',
    style: {
      backgroundColor: Colors.light?.success,
      color: Colors.light?.text.lighter,
      margin: small,
    },
    bodyStyle: { backgroundColor: Colors.light?.success },
  });
};
export default success;
