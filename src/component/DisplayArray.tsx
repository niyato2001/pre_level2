import { memo } from 'react';
import { useCount } from '@/hook/useCount';

interface DisplayArrayProps {
  countList: number[];
}

const DisplayArrayPresenter: React.FC<DisplayArrayProps> = ({ countList }) => (
  <div className='text-primary-800'>
    <h2>パターン３　countList: number[]</h2>
    <p>
      Count: <span className='font-bold'>{countList[0]}</span>
    </p>
  </div>
);

const DisplayArrayContainer: React.FC = () => {
  const { countList } = useCount();
  return <DisplayArrayPresenter countList={countList} />;
};

export const DisplayArray = memo(DisplayArrayContainer);
