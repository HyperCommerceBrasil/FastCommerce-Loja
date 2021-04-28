import React from 'react';
import { toast } from 'react-toastify';
import { Colors, Spacings } from '..';

const { small } = Spacings;

export const warning = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'warning',
    style: {
      backgroundColor: Colors.light?.warning,
      color: Colors.light?.text.darker,
      margin: small,
    },
    bodyStyle: { backgroundColor: Colors.light?.warning },
  });
};
export default warning;
