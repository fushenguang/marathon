import styled from 'styled-components';

export const HomeHeader = styled.div`
  width: 100%;
  height: 8%;
  min-height: 320px;
  padding-top: 48px;
  border-bottom-left-radius: 96px;
  border-bottom-right-radius: 96px;
  background: #2a3a4a;
  overflow: hidden;
`;

export const Slogan = styled.div`
  font-size: ${(props: { size?: number }) => (props?.size ? `${props?.size}px` : '18px')};
  color: #f9f9f9;
  text-align: center;
`;

export const HomeMain = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  width: 84%;
  margin: -112px auto 0 auto;
  border-radius: 8px;
  border: none;
  background: #fff;
  overflow: hidden;
`;
