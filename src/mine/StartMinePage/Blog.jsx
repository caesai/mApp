import React from 'react';
import Typography from 'core/components/Typography';
import styled from 'styled-components';
import image from './assets/blog.jpg';
import image2x from './assets/blog@2x.jpg';
import image3x from './assets/blog@3x.jpg';
import { MoreButton } from '../../core/components/Button'

const Root = styled.div`
  padding: 24px 20px;
`;

const Image = styled.img`
  width: 100%;  
`;

const Caption = styled.div`
  padding: 30px 12px 26px 30px;
  box-shadow: 0 8px 20px 0 rgba(70, 86, 132, 0.1);
  border-radius: 6px;
`;

const Date = styled(Typography)`
  color: #1d2249;
  opacity: 0.6;
  margin-top: 24px;
`;

const MoreButtonStyled = styled(MoreButton)`
  margin: 24px auto;
  display: block;
`;

const Blog = () => (
  <Root>
    <Typography variant="headline" margin="0 0 24px 0">Блог</Typography>
    <Image
      alt="computer"
      src={image}
      srcSet={`${image2x} 2x,${image3x} 3x`}
    />
    <Caption>
      <Typography>
        Как заниматься своими делами, пока деньги поступают на счет?
      </Typography>
      <Date>
        3 day ago
      </Date>
    </Caption>
    <MoreButtonStyled>
      Читать блог
    </MoreButtonStyled>
  </Root>
);

export default Blog;
