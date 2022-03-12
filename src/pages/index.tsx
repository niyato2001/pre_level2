import { useState } from 'react';
import { DisplayArray } from '@/component/DisplayArray';
import { DisplayFunction } from '@/component/DisplayFunction';
import { DisplayNumber } from '@/component/DisplayNumber';
import { DisplayObject } from '@/component/DisplayObject';

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const countObj = { count };
  const countList = [count];
  const countUp = () => setCount((count) => (count += 1));

  return (
    <main className='mx-auto max-w-lg py-6'>
      <div className='grid gap-y-10'>
        <h1 className='text-lg font-bold text-primary-800'>Rendeing Optimization of React</h1>
        <DisplayNumber count={count} />
        <DisplayObject countObj={countObj} />
        <DisplayArray countList={countList} />
        <DisplayFunction countUp={countUp} />
      </div>
    </main>
  );
};

export default Home;
