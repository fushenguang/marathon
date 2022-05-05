import { useMounted } from '@fujia/hooks';
import { useNavigate } from 'react-router-dom';

import { BootContainer } from './styles';

export const Boot = () => {
  const navigate = useNavigate();

  // useMounted(() => {
  //   setTimeout(() => {
  //     navigate('/home');
  //   }, 5000);
  // });

  return (
    <BootContainer>
      <h1>启动页</h1>
    </BootContainer>
  );
};
