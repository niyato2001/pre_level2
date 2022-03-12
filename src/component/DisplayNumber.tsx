import { memo } from 'react';
import { useCount } from '@/hook/useCount';

interface DisplayNumberProps {
  count: number;
}

const DisplayNumberPresenter: React.FC<DisplayNumberProps> = ({ count }) => (
  <div className='text-primary-800'>
    <h2>パターン１　count: number</h2>
    <p>
      Count: <span className='font-bold'>{count}</span>
    </p>
  </div>
);

const DisplayNumberContainer: React.FC = () => {
  const { count } = useCount();
  return <DisplayNumberPresenter count={count} />;
};

export const DisplayNumber = memo(DisplayNumberContainer);
