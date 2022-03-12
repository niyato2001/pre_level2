interface DisplayFunctionProps {
  countUp: () => void;
}

export const DisplayFunction: React.FC<DisplayFunctionProps> = ({ countUp }) => (
  <div className='text-primary-800'>
    <h2>パターン４　countUp: () =&gt; void</h2>
    <button
      onClick={countUp}
      className='rounded bg-primary-800 px-2 py-1 text-white hover:opacity-70'
    >
      カウントアップ
    </button>
  </div>
);
