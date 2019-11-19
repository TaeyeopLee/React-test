import { Memo } from '../models';

let store: Memo[] = [
  { id: 2, content: 'Second memo', createdAt: Date.now() },
  { id: 1, content: 'First memo', createdAt: Date.now() -1 },
]

export const fetchMemoList = () =>
  store.filter(memo => !memo.deleted).sort((a, b) => b.createdAt! - a.createdAt!);


export const fetchDeletedMemoList = () => 
  store.filter(memo => !!memo.deleted).sort((a, b) => b.createdAt! - a.createdAt!);


export const fetchMemo = (memoId: number) => 
  store.find(m => m.id === memoId);

export const addMemo = (memo: Memo) => {
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  memo.createdAt = Date.now();
  store = [ memo, ...store ];
  return memo;
}

export const deleteMemo = (memoId: number) => {
  store = store.map(memo => ({
    ...memo, deleted: memo.id === memoId ? true : memo.deleted,
  }));
}

export const restoreMemo = (memoId: number) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }));
}