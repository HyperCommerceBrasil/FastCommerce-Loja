import React from 'react';
import { toast } from 'react-toastify';
import { Colors, Spacings } from '..';

const { small } = Spacings;

export const info = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'info',
    style: {
      backgroundColor: Colors.light?.info,
      color: Colors.light?.text.darker,
      margin: small,
    },
    bodyStyle: { backgroundColor: Colors.light?.info },
  });
};
export default info;
