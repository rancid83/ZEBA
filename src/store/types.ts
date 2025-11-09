import React from 'react';

// 로딩 상태 타입만 정의
export interface LoadingState {
  isLoading: boolean;
  loadingMessage?: string;
}

// GradeData 타입 정의
export interface GradeDataItem {
  label: {
    title: string;
    subTitle: string;
  };
  grade: number;
  zebGrade: number;
  creator: number;
  consume: number;
}

export interface GradeState {
  gradeData: GradeDataItem[];
}

// GradeBuildingData 타입 정의
export interface GradeBuildingDataItem {
  label: {
    title: string;
    subTitle: string;
  };
  zebGrade: number;
  grade: number;
  renewable: number;
  active: number;
  passive: number;
  increase: number;
  benefit: number;
}

export interface GradeBuildingState {
  gradeBuildingData: GradeBuildingDataItem[];
}

// GradeDataPercent 타입 정의
export interface GradeDataPercentItem {
  label: {
    title: string;
    subTitle: string;
  };
  data: Array<{ name: string; value: number }>;
  totalMoney: number;
  description: {
    description: string;
    subDescription: string;
  };
}

export interface GradeDataPercentState {
  gradeDataPercent: GradeDataPercentItem[];
}
