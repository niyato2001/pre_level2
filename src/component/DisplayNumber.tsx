import { useRecoilValue } from 'recoil';
import { countState } from '@/model/count';

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

export const DisplayNumber: React.FC = () => {
  const count = useRecoilValue(countState);
  return <DisplayNumberPresenter count={count} />;
};
