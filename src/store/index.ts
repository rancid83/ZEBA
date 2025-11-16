import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createLoadingSlice, LoadingSlice } from './slices/loadingSlice';
import { createGradeSlice, GradeSlice } from './slices/gradeSlice';
import {
  createGradeBuildingSlice,
  GradeBuildingSlice,
} from './slices/gradeBuildingSlice';
import {
  createGradeDataPercentSlice,
  GradeDataPercentSlice,
} from './slices/gradeDataPercentSlice';
import { createPageSlice, PageSlice } from './slices/pageSlice';
import {
  createStandardModelPerformanceSlice,
  StandardModelPerformanceSlice,
} from './slices/standardModelPerformanceSlice';

// 모든 슬라이스를 합친 스토어 타입
type StoreState = LoadingSlice &
  GradeSlice &
  GradeBuildingSlice &
  GradeDataPercentSlice &
  PageSlice &
  StandardModelPerformanceSlice;

// 통합 스토어 생성
export const useStore = create<StoreState>()(
  devtools(
    (set, get) => ({
      ...createLoadingSlice(set),
      ...createGradeSlice(set),
      ...createGradeBuildingSlice(set),
      ...createGradeDataPercentSlice(set),
      ...createPageSlice(set),
      ...createStandardModelPerformanceSlice(set, get),
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
