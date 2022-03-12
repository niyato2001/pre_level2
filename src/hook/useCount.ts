import { useState } from 'react';

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

export const useCount = (): UseCountReturnType => {
  const initCountObj: CountObj = { count: 0 };

  const [count, setCount] = useState<number>(0);
  const [countObj, setCountObj] = useState<CountObj>(initCountObj);
  const [countList, setCountList] = useState<number[]>([0]);

  const countUp = () => setCount((count) => (count += 1));

  const objCountUp = (): void => {
    const newCountObj = { ...countObj };
    newCountObj.count++;
    setCountObj(newCountObj);
  };

  const listCountUp = () => {
    const newCountList = [...countList];
    newCountList[0]++;
    setCountList(newCountList);
  };

  return { count, countObj, countList, countUp, objCountUp, listCountUp };
};
