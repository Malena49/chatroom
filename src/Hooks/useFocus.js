/* eslint-disable import/prefer-default-export */

import { useRef, useEffect } from 'react';

export const useFocus = () => {
  const ref = useRef();

  useEffect(
    () => {
      ref.current.focus();
    },
    [],
  );

  return ref;
};