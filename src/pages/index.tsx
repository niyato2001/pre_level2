import { DisplayArray } from '@/component/DisplayArray';
import { DisplayFunction } from '@/component/DisplayFunction';
import { DisplayNumber } from '@/component/DisplayNumber';
import { DisplayObject } from '@/component/DisplayObject';

const Home: React.FC = () => (
  <main className='mx-auto grid max-w-lg gap-y-10 py-6'>
    <h1 className='text-lg font-bold text-primary-800'>Rendeing Optimization of React</h1>
    <DisplayNumber />
    <DisplayObject />
    <DisplayArray />
    <DisplayFunction />
  </main>
);

export default Home;
