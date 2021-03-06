import { useRecoilValue } from 'recoil';
import { CountObj, countObjState } from '@/model/count';

interface DisplayObjectProps {
  countObj: CountObj;
}

const DisplayObjectPresenter: React.FC<DisplayObjectProps> = ({ countObj }) => (
  <div className='text-primary-800'>
    <h2>パターン２　countObj: {'{count: number}'}</h2>
    <p>
      Count: <span className='font-bold'>{countObj.count}</span>
    </p>
  </div>
);

export const DisplayObject: React.FC = () => {
  const countObj = useRecoilValue(countObjState);
  return <DisplayObjectPresenter countObj={countObj} />;
};
