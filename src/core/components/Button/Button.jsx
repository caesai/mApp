import React from 'react';
import styled from 'styled-components';
import arrowRight from './assets/arrow-right.svg';

const Base = styled.button`
  width: 275px;
  height: 54px;
  border-radius: 27px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  display: block;
  margin: 0 auto;
`;

const Primary = styled(Base)`
  background-image: linear-gradient(to left, #0053ff, #00b4ff);
  box-shadow: 0 8px 20px 0 rgba(70, 86, 132, 0.2), 0 15px 55px 0 rgba(157, 163, 180, 0.2);
  color: #fff;
`;

const Simple = styled(Base)`
  border: solid 2px rgba(188,226,255,0.3);
);
  color: #00b1ff;
  background-color: transparent;
`;

export const More = styled(Simple)`
  background-image: url(${arrowRight});
  background-position: 204px center;
  background-repeat: no-repeat;
`;

export const SimpleButton = ({ children, ...props }) => (
  <Simple {...props}>
    {children}
  </Simple>
);

export const PrimaryButton = ({ children, ...props }) => (
  <Primary {...props}>
    {children}
  </Primary>
);

export const MoreButton = ({ children, ...props }) => (
  <More {...props}>
    {children}
  </More>
);

