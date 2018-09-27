import styled from 'styled-components';
import { PrimaryButton } from 'core/components/Button/Button';

export const Root = styled.div`
`;

export const Main = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const VideoWrap = styled.div`
  position: relative;
  height: 162px;
  padding-top: 82px
`;

export const Video = styled.div`
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

export const StartMinButton = styled(PrimaryButton)`
  margin-top: 48px;
`;

export const LeftShape = styled.img`
  position: absolute;
  top: 70px;
  left: -20px;
  z-index: -1;
`;

export const RightShape = styled.img`
  position: absolute;
  top: 0;
  right: -20px;
  z-index: -1;
`;

export const VideoIcon = styled.img`
  display: block;
  margin-right: 16px
`;

export const DeviceList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const HowImage = styled.img`
  display: block;
  flex: 1;
`;

export const DevicesWrap = styled.div`
  padding: 0 20px;
`;

export const HowWorks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const HowWorksTexts = styled.div`
  flex: 1;
`;
