import { useRecoilValue } from 'recoil';
import { countListState } from '@/model/count';

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

export const DisplayArray: React.FC = () => {
  const countList = useRecoilValue(countListState);
  return <DisplayArrayPresenter countList={countList} />;
};
