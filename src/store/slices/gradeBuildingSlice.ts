import { GradeBuildingState } from '../types';

// GradeBuildingData 슬라이스
export interface GradeBuildingSlice extends GradeBuildingState {
  updateGradeBuildingData: (index: number, updates: any) => void;
  resetGradeBuildingData: () => void;
}

// 기본 GradeBuildingData (label만 포함, 나머지는 '-')
const getDefaultGradeBuildingData = () => [
  {
    label: {
      title: '법규 기준',
      subTitle: '에너지 자립률',
    },
    zebGrade: 0,
    grade: 0,
    renewable: 0,
    active: 0,
    passive: 0,
    increase: 0,
    benefit: 0,
  },
  {
    label: {
      title: '의무 등급',
      subTitle: '에너지 자립률',
    },
    zebGrade: 0,
    grade: 0,
    renewable: 0,
    active: 0,
    passive: 0,
    increase: 0,
    benefit: 0,
  },
  {
    label: {
      title: '목표 등급',
      subTitle: '시공 비용 합계',
    },
    zebGrade: 0,
    grade: 0,
    renewable: 0,
    active: 0,
    passive: 0,
    increase: 0,
    benefit: 0,
  },
  {
    label: {
      title: '성능 조합 등급',
      subTitle: '시공 비용 합계',
    },
    zebGrade: 0,
    grade: 0,
    renewable: 0,
    active: 0,
    passive: 0,
    increase: 0,
    benefit: 0,
  },
];

export const createGradeBuildingSlice = (set: any) => ({
  gradeBuildingData: getDefaultGradeBuildingData(),

  updateGradeBuildingData: (index: number, updates: any) =>
    set(
      (state: any) => ({
        gradeBuildingData: state.gradeBuildingData.map(
          (item: any, i: number) =>
            i === index ? { ...item, ...updates } : item,
        ),
      }),
      false,
      'gradeBuilding/updateGradeBuildingData',
    ),

  resetGradeBuildingData: () =>
    set(
      { gradeBuildingData: getDefaultGradeBuildingData() },
      false,
      'gradeBuilding/resetGradeBuildingData',
    ),
});
