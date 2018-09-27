import React from 'react';
import styled from 'styled-components';
import Typography from 'core/components/Typography';
import Link from 'core/components/Link';
import { MoreButton } from 'core/components/Button/Button';
import circleImageSrc from './assets/circle.svg';
import shareIcon from './assets/share.svg';

const ItemWrap = styled.div`
  padding: 40px 20px 0;
`;

const TitleWrap = styled.div`
  padding-left: 80px;
  height: 56px;
  background: no-repeat url(${circleImageSrc}) left center;
`;

const Root = styled.div`
  padding: 24px 0;
  margin-top: 53px;
  background-color: #1d2249;
`;

const WhiteTypography = styled(Typography)`
  color: #fff;
`;

const LinkText = styled(Typography)`
  color: #00b1ff;
  background: url(${shareIcon}) no-repeat right center;
  margin-right: 80px;
`;

const ListMoreButton = styled(MoreButton)`
  display: block;
  margin: 40px auto;
`;

const data = [
  {
    title: 'CoinMap',
    linkText: 'coinmap.org',
    link: '/',
    text: 'Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год',
  },
  {
    title: 'CoinMap',
    linkText: 'coinmap.org',
    link: '/',
    text: 'Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год',
  },
  {
    title: 'CoinMap',
    linkText: 'coinmap.org',
    link: '/',
    text: 'Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год',
  },
  {
    title: 'CoinMap',
    linkText: 'coinmap.org',
    link: '/',
    text: 'Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год',
  },
];

const InfoList = () => (
  <Root>
    <WhiteTypography variant="headline">Где потратить</WhiteTypography>
    <div>
      {
        data.map(({
          title,
          linkText,
          link,
          text,
        }) => (
          <ItemWrap>
            <TitleWrap>
              <WhiteTypography
                variant="title"
                align="left"
              >
                {title}
              </WhiteTypography>
              <Link to={link}>
                <LinkText weight="500">{linkText}</LinkText>
              </Link>
            </TitleWrap>
            <WhiteTypography margin="23px 0 0 0">
              {text}
            </WhiteTypography>
          </ItemWrap>
        ))
      }
    </div>
    <ListMoreButton>Смотреть еще</ListMoreButton>
  </Root>
);

export default InfoList;
