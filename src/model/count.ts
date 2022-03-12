import { atom } from 'recoil';

export interface CountObj {
  count: number;
}

export const countState = atom<number>({
  key: 'countState',
  default: 0,
});

export const countObjState = atom<CountObj>({
  key: 'countObjState',
  default: { count: 0 },
});

export const countListState = atom<number[]>({
  key: 'countListState',
  default: [0],
});
