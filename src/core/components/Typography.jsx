import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: Rubik, sans-serif;
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.weight || 'normal'};
  margin: ${props => props.margin || '0'}
`;

const Caption = styled(Paragraph)`
  font-size: 12px;
`;

const Body = styled(Paragraph)`
  font-size: 16px;
`;

const Headline = Paragraph.withComponent('h1').extend`
  font-size: 24px;
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

const Typography = ({
  children,
  variant,
  align,
  weight,
  className,
  margin,
}) => {
  const Component = selectTag(variant);

  return (
    <Component
      align={align}
      className={className}
      weight={weight}
      margin={margin}
    >
      {children}
    </Component>
  );
};

export default Typography;
