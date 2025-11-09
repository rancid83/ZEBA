import React from 'react';
import { GradeDataPercentState } from '../types';

// GradeDataPercent 슬라이스
export interface GradeDataPercentSlice extends GradeDataPercentState {
  updateGradeDataPercent: (index: number, updates: any) => void;
  resetGradeDataPercent: () => void;
}

// 기본 GradeDataPercent (label만 포함, 나머지는 기본값)
const getDefaultGradeDataPercent = () => [
  {
    label: {
      title: '법규 기준',
      subTitle: '에너지 자립률',
    },
    data: [],
    totalMoney: 0,
    description: {
      description: '지자체 에너지 절약',
      subDescription: '법규 기준',
    },
  },
  {
    label: {
      title: '의무 등급',
      subTitle: '비용 구성 비율',
    },
    data: [],
    totalMoney: 0,
    description: {
      description: '[STEP-1]',
      subDescription: '의무 등급',
    },
  },
  {
    label: {
      title: '목표 등급',
      subTitle: '비용 구성 비율',
    },
    data: [],
    totalMoney: 0,
    description: {
      description: '[STEP-2]',
      subDescription: '목표 등급',
    },
  },
  {
    label: {
      title: '성능 조합 등급',
      subTitle: '비용 구성 비율',
    },
    data: [],
    totalMoney: 0,
    description: {
      description: '[STEP-3]',
      subDescription: '성능 조합 등급',
    },
  },
];

export const createGradeDataPercentSlice = (set: any) => ({
  gradeDataPercent: getDefaultGradeDataPercent(),

  updateGradeDataPercent: (index: number, updates: any) =>
    set(
      (state: any) => ({
        gradeDataPercent: state.gradeDataPercent.map((item: any, i: number) =>
          i === index ? { ...item, ...updates } : item,
        ),
      }),
      false,
      'gradeDataPercent/updateGradeDataPercent',
    ),

  resetGradeDataPercent: () =>
    set(
      { gradeDataPercent: getDefaultGradeDataPercent() },
      false,
      'gradeDataPercent/resetGradeDataPercent',
    ),
});
