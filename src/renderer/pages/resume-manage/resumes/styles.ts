import styled from 'styled-components';

export const ResumeContainer = styled.section`
  height: 100%;
  background-color: #fff;
`;

export const ResumeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.2rem 0 1.2rem;
  background-color: #f0f2f5;
`;

export const ResumeMain = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

export const ResumeView = styled.div`
  flex: 1;
`;

export const ResumeModules = styled.aside`
  width: 28rem;
  padding: 1.4rem;
  background-color: #f5f5f5;
`;

export const ModuleTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.2rem;
  position: relative;
  font-size: 1.6rem;
  padding-left: 1.2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10%;
    width: 0.3rem;
    height: 80%;
    background-color: #666;
    border-radius: 0.1rem;
  }
`;
