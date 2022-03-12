import { useSetRecoilState } from 'recoil';
import { countListState, countObjState, countState } from '@/model/count';

type UseCountReturnType = {
  countUp: () => void;
  objCountUp: () => void;
  listCountUp: () => void;
};

export const useCount = (): UseCountReturnType => {
  const setCount = useSetRecoilState(countState);
  const setCountObj = useSetRecoilState(countObjState);
  const setCountList = useSetRecoilState(countListState);

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

  return { countUp, objCountUp, listCountUp };
};
