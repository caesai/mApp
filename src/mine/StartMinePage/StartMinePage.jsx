import React from 'react';

import withContent from 'core/staticContent/withContent';
import Link from 'core/components/Link';
import Typography from 'core/components/Typography';
import { MoreButton } from 'core/components/Button/Button';
import Device from './Device';
import InfoList from './InfoList';
import Blog from './Blog';

import image1 from './assets/image1.svg';
import youtubeIcon from './assets/youtube.svg';
import leftShape from './assets/leftShape.svg';
import rightShape from './assets/rightShape.svg';
import howSrc from './assets/how.svg';

import {
  Root,
  Main,
  StartMinButton,
  Video,
  VideoWrap,
  VideoIcon,
  DeviceList,
  LeftShape,
  RightShape,
  HowImage,
  DevicesWrap,
  HowWorks,
  HowWorksTexts,
} from './styles';

const StartMinePage = ({ i18n }) => (
  <Root>
    <Main>
      <Typography
        margin="40px 0 16px 0"
        variant="headline"
      >
        {i18n('mine.start_mine.title')}
      </Typography>
      <img src={image1} alt="computers" />
      <Link to="/mine-status">
        <StartMinButton
          variant="raised"
          color="primary"
        >
          {i18n('mine.start_mine.button')}
        </StartMinButton>
      </Link>
      <Typography variant="caption" align="center" margin="24px 0 0 0">
        {i18n('mine.start_mine.desc1')}
      </Typography>
      <VideoWrap>
        <LeftShape src={leftShape} alt="shape" />
        <RightShape src={rightShape} alt="shape" />
        <Video>
          <VideoIcon src={youtubeIcon} alt="video" />
          <Typography>Узнай все о сервисе за 2 минуты</Typography>
        </Video>
      </VideoWrap>
    </Main>
    <DevicesWrap>
      <Typography variant="headline">Майнинг в браузере на любом устройстве</Typography>
      <Typography variant="body" margin="32px 0 0 0">
        Больше не требуется покупать дорогостоящее оборудование и тратить свое время на настройку майнеров.
      </Typography>
      <Typography
        variant="body"
        align="center"
        weight="600"
        margin="32px 0 32px 0"
      >
        Доступно на всех устройствах:
      </Typography>
      <DeviceList>
        <Device title="Компьютер" type="computer" />
        <Device title="Телефон" type="phone" />
        <Device title="Планшет" type="tablet" />
        <Device title="Игровая приставка" type="console" />
      </DeviceList>
      <Typography
        variant="body"
        align="center"
        weight="600"
        margin="32px 0 32px 0"
      >
        Больше устройств - больше доход!
      </Typography>
      <MoreButton>
        Подробнее
      </MoreButton>
      <HowWorks>
        <HowWorksTexts>
          <Typography
            variant="title"
            align="center"
            weight="600"
            margin="32px 0 32px 0"
          >
            Как это работает
          </Typography>
          <Typography
            variant="body"
            align="center"
            margin="32px 0 32px 0"
          >
            SimpleMining - это самый простой и доступный майнинг криптовалюты прямо в браузере! Вы получаете деньги только за то что открыли эту страницу! Без вложений, без приглашений, без просмотров рекламы и выполнения заданий. Просто оставьте открытой эту страницу в фоновой вкладке и занимайтесь своими делами, пока деньги будут поступать на Ваш счет.
          </Typography>
          <MoreButton>
            Подробнее
          </MoreButton>
        </HowWorksTexts>
        <HowImage src={howSrc} />
      </HowWorks>
    </DevicesWrap>
    <InfoList />
    <Blog />
    <StartMinButton
      variant="raised"
      color="primary"
    >
      {i18n('mine.start_mine.button')}
    </StartMinButton>
  </Root>
);

export default withContent(StartMinePage);
//
