import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createLoadingSlice, LoadingSlice } from './slices/loadingSlice';

// 모든 슬라이스를 합친 스토어 타입
type StoreState = LoadingSlice;

// 통합 스토어 생성
export const useStore = create<StoreState>()(
  devtools(
    (set) => ({
      ...createLoadingSlice(set),
    }),
    {
      name: 'zeba-store',
    },
  ),
);

// 로딩 관련 훅들 (필요시 사용)
// export const useLoading = () => useStore((state) => ({
//   isLoading: state.isLoading,
//   loadingMessage: state.loadingMessage,
// }));

// export const useLoadingActions = () => useStore((state) => ({
//   setLoading: state.setLoading,
//   clearLoading: state.clearLoading,
// }));
