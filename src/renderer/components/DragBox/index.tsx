import { CSSProperties, FC, PropsWithChildren, useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
// import { useMounted } from '@fujia/hooks';

import { DragContainer } from './styles';

interface DragBoxProps {
  className?: string;
  style?: CSSProperties;
  size?: number;
  onDrop?: (buffer: ArrayBuffer | null | string) => void;
}

export const DragBox: FC<PropsWithChildren<DragBoxProps>> = (props) => {
  const { className, style = {}, size = 300, onDrop, children } = props;
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [dragOverStats, setDragOverStats] = useState({
    text: '',
    hovering: false,
  });

  const mergeStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
  };

  // const classNames = classnames(
  //   {
  //     'drag-hovering': dragOverStats.hovering,
  //   },
  //   className
  // );

  if (dragOverStats.hovering) {
    mergeStyles.color = '#1890ff';
    mergeStyles.borderColor = '#1890ff';
  }

  useEffect(() => {
    if (!dragRef.current) return;

    dragRef.current.addEventListener('dragover', (ev) => {
      ev.preventDefault();
      setDragOverStats({
        text: '请在此处放置文件',
        hovering: true,
      });
    });

    dragRef.current.addEventListener('dragleave', (ev) => {
      setDragOverStats({
        text: '',
        hovering: false,
      });
    });

    dragRef.current.addEventListener('drop', (ev) => {
      ev.preventDefault();
      setDragOverStats({
        text: '',
        hovering: false,
      });

      const dropFiles = ev.dataTransfer?.files;

      if (!dropFiles) return;

      Array.from(dropFiles).forEach((file) => {
        const fr = new FileReader();

        fr.onload = () => {
          if (onDrop) {
            onDrop(fr.result);
          }
        };

        fr.readAsArrayBuffer(file);
      });
    });
  }, []);

  return (
    <DragContainer ref={dragRef} className={className} style={mergeStyles}>
      {!!dragOverStats.text && <span>{dragOverStats.text}</span>}
      {children}
    </DragContainer>
  );
};
