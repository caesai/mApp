import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: Rubik, sans-serif;
  margin: 0;
  text-align: ${props => props.align || 'left'};
`;

const Caption = styled(Paragraph)`
  font-size: 12px;
`;

const Body = styled(Paragraph)`
  font-size: 16px;
`;

const Headline = styled.h1`
  font-size: 24px;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  line-height: 29px;
  text-align: ${props => props.align || 'center'};
`;

const Title = Headline.withComponent('h2').extend`
  font-size: 20px;
`;


const VARIANT_TITLE = 'title';
const VARIANT_HEADLINE = 'headline';
const VARIANT_CAPTION = 'caption';
const VARIANT_BODY = 'body';

const selectTag = (variant) => {
  switch (variant) {
    case VARIANT_TITLE:
      return Title;
    case VARIANT_CAPTION:
      return Caption;
    case VARIANT_HEADLINE:
      return Headline;
    case VARIANT_BODY:
      return Body;
    default:
      return Body;
  }
};

const Typography = ({ children, variant, align }) => {
  const Component = selectTag(variant);

  return (
    <Component align={align}>
      {children}
    </Component>
  );
};

export default Typography;
