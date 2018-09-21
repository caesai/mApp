import React from 'react';
import styled from 'styled-components';

import withContent from 'core/staticContent/withContent';
import Button from 'core/components/Button';
import Link from 'core/components/Link';
import Typography from 'core/components/Typography';
import image1 from './assets/image1.svg';
import youtubeIcon from './assets/youtube.svg';
import leftShape from './assets/leftShape.svg';
import rightShape from './assets/rightShape.svg';

const Root = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  flex: 1;
`;

const VideoWrap = styled.div`
  position: relative;
  height: 250px;
  padding-top: 50px
`;

const Video = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  width: 280px;
  height: 82px;
  border-radius: 41px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

const StartMinButton = styled(Button)`
  margin-top: 48px;
`;

const LeftShape = styled.img`
  position: absolute;
  top: 70px;
  left: -20px;
  z-index: -1;
`;

const RightShape = styled.img`
  position: absolute;
  top: 0;
  right: -20px;
  z-index: -1;
`;

const VideoIcon = styled.img`
  display: block;
  margin-right: 16px
`;

const ButtonDescription = styled(Typography)`
  height: 40px;
`;

const StartMinePage = ({ i18n }) => (
  <Root>
    <Main>
      <Typography variant="headline">{i18n('mine.start_mine.title')}</Typography>
      <img src={image1} alt="computers" />
      <Link to="/mine-status">
        <StartMinButton
          variant="raised"
          color="primary"
        >
          {i18n('mine.start_mine.button')}
        </StartMinButton>
      </Link>
      <ButtonDescription variant="caption" align="center">
        {i18n('mine.start_mine.desc1')}
      </ButtonDescription>
      <VideoWrap>
        <LeftShape src={leftShape} alt="shape" />
        <RightShape src={rightShape} alt="shape" />
        <Video>
          <VideoIcon src={youtubeIcon} alt="video" />
          <Typography>Узнай все о сервисе за 2 минуты</Typography>
        </Video>
      </VideoWrap>
    </Main>
    <Typography variant="headline">Майнинг в браузере на любом устройстве</Typography>
    <Typography variant="body">Больше не требуется покупать дорогостоящее оборудование и тратить свое время на настройку майнеров.</Typography>
    <Typography variant="body">Доступно на всех устройствах:</Typography>
  </Root>
);

export default withContent(StartMinePage);
