import { DisplayArray } from '@/component/DisplayArray';
import { DisplayFunction } from '@/component/DisplayFunction';
import { DisplayNumber } from '@/component/DisplayNumber';
import { DisplayObject } from '@/component/DisplayObject';
import { useCount } from '@/hook/useCount';

const Home: React.FC = () => {
  const { count, countObj, countList, countUp, objCountUp, listCountUp } = useCount();
  return (
    <main className='mx-auto max-w-lg py-6'>
      <div className='grid gap-y-10'>
        <h1 className='text-lg font-bold text-primary-800'>Rendeing Optimization of React</h1>
        <DisplayNumber count={count} />
        <DisplayObject countObj={countObj} />
        <DisplayArray countList={countList} />
        <DisplayFunction countUp={countUp} objCountUp={objCountUp} listCountUp={listCountUp} />
      </div>
    </main>
  );
};

export default Home;
