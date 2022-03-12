import { DisplayArray } from '@/component/DisplayArray';
import { DisplayFunction } from '@/component/DisplayFunction';
import { DisplayNumber } from '@/component/DisplayNumber';
import { DisplayObject } from '@/component/DisplayObject';
import { useCount } from '@/hook/useCount';

const Home: React.FC = () => {
  const { count, countObj, countList, countUp, objCountUp, listCountUp } = useCount();
  return (
    <main className='mx-auto grid max-w-lg gap-y-10 py-6'>
      <h1 className='text-lg font-bold text-primary-800'>Rendeing Optimization of React</h1>
      <DisplayNumber count={count} />
      <DisplayObject countObj={countObj} />
      <DisplayArray countList={countList} />
      <DisplayFunction countUp={countUp} objCountUp={objCountUp} listCountUp={listCountUp} />
    </main>
  );
};

export default Home;
