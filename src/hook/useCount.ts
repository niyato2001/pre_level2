import { atom, useRecoilState } from 'recoil';

interface CountObj {
  count: number;
}

type UseCountReturnType = {
  count: number;
  countObj: CountObj;
  countList: number[];
  countUp: () => void;
  objCountUp: () => void;
  listCountUp: () => void;
};

const countState = atom<number>({
  key: 'countState',
  default: 0,
});

const countObjState = atom<CountObj>({
  key: 'countObjState',
  default: { count: 0 },
});

const countListState = atom<number[]>({
  key: 'countListState',
  default: [0],
});

export const useCount = (): UseCountReturnType => {
  const [count, setCount] = useRecoilState(countState);
  const [countObj, setCountObj] = useRecoilState(countObjState);
  const [countList, setCountList] = useRecoilState(countListState);

  const countUp = () => setCount((prevCount) => (prevCount += 1));

  const objCountUp = (): void =>
    setCountObj((prevCountObj) => {
      const countObj = { ...prevCountObj };
      countObj.count++;
      return countObj;
    });

  const listCountUp = () =>
    setCountList((prevCountList) => {
      const countList = [...prevCountList];
      countList[0]++;
      return countList;
    });

  return { count, countObj, countList, countUp, objCountUp, listCountUp };
};
