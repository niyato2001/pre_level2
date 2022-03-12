interface DisplayObjectProps {
  countObj: {
    count: number;
  };
}

export const DisplayObject: React.FC<DisplayObjectProps> = ({ countObj }) => (
  <div className='text-primary-800'>
    <h2>パターン２　countObj: {'{count: number}'}</h2>
    <p>Count: {countObj.count}</p>
  </div>
);