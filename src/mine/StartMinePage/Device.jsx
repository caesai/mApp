import React from 'react';
import styled from 'styled-components';
import Typography from 'core/components/Typography';
import computerSrc from './assets/dev1.svg';
import phoneSrc from './assets/dev2.svg';
import tabletSrc from './assets/dev3.svg';
import consoleSrc from './assets/dev4.svg';

const Root = styled.div`
  flex: 1;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Img = styled.img`
  width: 100px;
  margin-bottom: 8px;
`;

const Device = ({ title, type }) => {
  let imageSrc;
  switch (type) {
    case 'computer':
      imageSrc = computerSrc;
      break;
    case 'phone':
      imageSrc = phoneSrc;
      break;
    case 'tablet':
      imageSrc = tabletSrc;
      break;
    case 'console':
      imageSrc = consoleSrc;
      break;
    default:
      throw new Error('invalid type for device');
  }

  return (
    <Root>
      <Img src={imageSrc} alt="device" />
      <Typography align="center">{title}</Typography>
    </Root>
  );
};

export default Device;
