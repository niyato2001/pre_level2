import { memo } from 'react';

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

export const DisplayNumber = memo(DisplayNumberPresenter);
