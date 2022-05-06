import styled from 'styled-components';

export const DragContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px dashed #ddd;

  .drag-hovering {
    border-color: #1890ff;
    color: #1890ff;
  }
`;
