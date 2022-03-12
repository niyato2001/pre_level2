interface DisplayArrayProps {
  countList: number[];
}

export const DisplayArray: React.FC<DisplayArrayProps> = ({ countList }) => (
  <div className='text-primary-800'>
    <h2>パターン３　countList: number[]</h2>
    <p>Count: {countList[0]}</p>
  </div>
);
