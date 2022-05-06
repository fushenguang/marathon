import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { useMounted } from '@fujia/hooks';s

import { HomeHeader, Slogan, HomeMain } from './styles';
import { ROUTER, ROUTER_LIST } from '@routes/constants';
import { DragBox } from '@components/DragBox';

const { Meta } = Card;

export const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (routeName: string) => () => {
    if (ROUTER_LIST.includes(routeName)) {
      navigate(routeName);
    }
  };

  const handleOpenDialog = () => {
    window.electron.dialog.show({
      title: '打开一个文件',
      buttonLabel: '按此打开文件',
    });
  };

  // useMounted(() => {
  //   window.oncontextmenu = function (e) {
  //     e.preventDefault();
  //     console.log(e.clientX, e.clientY);
  //   };
  // });

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
        {/* <Button onClick={handleOpenDialog}>open system dialog</Button> */}
        <DragBox />
      </HomeMain>
    </section>
  );
};
