import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 275px;
  height: 54px;
  border-radius: 27px;
  background-image: linear-gradient(to left, #0053ff, #00b4ff);
  box-shadow: 0 8px 20px 0 rgba(70, 86, 132, 0.2), 0 15px 55px 0 rgba(157, 163, 180, 0.2);
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

const Button = ({
  children,
  onClick,
  className,
}) => (
  <ButtonStyled
    className={className}
    onClick={onClick}
  >
    {children}
  </ButtonStyled>
);

export default Button;
