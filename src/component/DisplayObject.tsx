import { memo } from 'react';
import { useCount } from '@/hook/useCount';

interface DisplayObjectProps {
  countObj: {
    count: number;
  };
}

const DisplayObjectPresenter: React.FC<DisplayObjectProps> = ({ countObj }) => (
  <div className='text-primary-800'>
    <h2>パターン２　countObj: {'{count: number}'}</h2>
    <p>
      Count: <span className='font-bold'>{countObj.count}</span>
    </p>
  </div>
);

const DisplayObjectContainer: React.FC = () => {
  const { countObj } = useCount();
  return <DisplayObjectPresenter countObj={countObj} />;
};

export const DisplayObject = memo(DisplayObjectContainer);
