import { useCallback, useState } from 'react';

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

  const countUp = useCallback(() => setCount((prevCount) => (prevCount += 1)), []);

  const objCountUp = useCallback((): void => {
    setCountObj((prevCountObj) => {
      const countObj = { ...prevCountObj };
      countObj.count++;
      return countObj;
    });
  }, []);

  const listCountUp = useCallback(() => {
    setCountList((prevCountList) => {
      const countList = [...prevCountList];
      countList[0]++;
      return countList;
    });
  }, []);

  return { count, countObj, countList, countUp, objCountUp, listCountUp };
};
