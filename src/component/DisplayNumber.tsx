interface DisplayNumberProps {
  count: number;
}

export const DisplayNumber: React.FC<DisplayNumberProps> = ({ count }) => (
  <div className='text-primary-800'>
    <h2>パターン１　count: number</h2>
    <p>Count: {count}</p>
  </div>
);
