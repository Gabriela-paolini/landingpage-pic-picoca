import React from 'react';

import * as S from './styles';

export default function Button(props) {
  const {label, ...rest} = props
  return (
    <S.Button {...rest}>
      {label}
    </S.Button>
  );
}
