import { useEffect } from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMounted } from '@fujia/hooks';

import { HomeHeader, Slogan, HomeMain } from './styles';
import { ROUTER, ROUTER_LIST } from '@routes/constants';
import { DragBox } from '@components/DragBox';

const { Meta } = Card;

export const Home = () => {
  const navigate = useNavigate();
  // const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleCardClick = (routeName: string) => () => {
    if (ROUTER_LIST.includes(routeName)) {
      navigate(routeName);
    }
  };

  // const handleOpenDialog = () => {
  //   window.electron.dialog.show({
  //     title: '打开一个文件',
  //     buttonLabel: '按此打开文件',
  //   });
  // };

  // useEffect(() => {
  //   initSQLite();
  // }, []);
  // const handleScreenRecording = () => {
  //   window.electron.ipcRenderer.once('screen-recording', async (sourceId: string) => {
  //     console.log(sourceId);
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({
  //         audio: false,
  //         video: {
  //           // @ts-ignore
  //           mandatory: {
  //             chromeMediaSource: 'desktop',
  //             chromeMediaSourceId: sourceId,
  //             minWidth: 1280,
  //             maxWidth: 1280,
  //             minHeight: 720,
  //             maxHeight: 720,
  //           },
  //         },
  //       });
  //       const videoEle = videoRef.current;

  //       if (!videoEle) return;

  //       videoEle.srcObject = stream;
  //       videoEle.onloadedmetadata = () => {
  //         videoEle.play();
  //       };
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });

  //   window.electron.ipcRenderer.startScreenRecording();
  // };

  // const handlePrintToPDF = () => {
  //   window.electron.ipcRenderer.printToPDF();
  // };

  return (
    <section>
      <HomeHeader>
        <Slogan size={32}>Make Career Easy</Slogan>
        <Slogan>职业生涯不是一场短跑比赛，而是一场可能长达几十年的马拉松</Slogan>
      </HomeHeader>

      <HomeMain>
        <Card
          className="home-card"
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          onClick={handleCardClick(ROUTER.resumes)}
        >
          <Meta title="简历管理" description="轻松的管理个人简历" />
        </Card>
        <Card
          className="home-card"
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          onClick={handleCardClick(ROUTER.records)}
        >
          <Meta title="面试记录与复盘" description="经历与结果一样重要" />
        </Card>
        <Card
          className="home-card"
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          onClick={handleCardClick(ROUTER.practices)}
        >
          <Meta title="面试模拟" description="实践出真知" />
        </Card>
        {/* <Card
          className="home-card"
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          onClick={handleCardClick(ROUTER.resumes)}
        >
          <Meta title="我的助手" description="实用的小工具" />
        </Card>
        <Card
          className="home-card"
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          onClick={handleCardClick(ROUTER.resumes)}
        >
          <Meta title="计划与行动" description="准备好每一次面试" />
        </Card>
        <Card
          className="home-card"
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          onClick={handleCardClick(ROUTER.resumes)}
        >
          <Meta title="发现" description="我们一起走得更远" />
        </Card> */}
      </HomeMain>
    </section>
  );
};
