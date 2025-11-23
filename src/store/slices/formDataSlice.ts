import { StateCreator } from 'zustand';

interface FormData {
  // 주소 정보
  roadName: string;
  lotNumber: string;

  // 건축물 용도
  bld_main_use: string;
  bld_detail_use: string;

  // 면적 정보
  bld_al_area: number | null; // 연면적
  bld_area: number | null; // 건축면적

  // 층수 정보
  bld_floor_esurf: number | null; // 지상층수

  // ZEB 등급
  zebGrade: string;
}

export interface FormDataSlice {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  setAddressData: (roadName: string, lotNumber: string) => void;
  setBuildingUse: (main: string, detail: string) => void;
  setAreaData: (totalArea: number, buildingArea: number) => void;
  setFloorCount: (count: number) => void;
  setZebGrade: (grade: string) => void;
  resetFormData: () => void;
}

const initialFormData: FormData = {
  roadName: '',
  lotNumber: '',
  bld_main_use: '0',
  bld_detail_use: '0',
  bld_al_area: null,
  bld_area: null,
  bld_floor_esurf: null,
  zebGrade: '4',
};

export const createFormDataSlice: StateCreator<FormDataSlice> = (set) => ({
  formData: initialFormData,

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  setAddressData: (roadName, lotNumber) =>
    set((state) => ({
      formData: { ...state.formData, roadName, lotNumber },
    })),

  setBuildingUse: (main, detail) =>
    set((state) => ({
      formData: {
        ...state.formData,
        bld_main_use: main,
        bld_detail_use: detail,
      },
    })),

  setAreaData: (totalArea, buildingArea) =>
    set((state) => ({
      formData: {
        ...state.formData,
        bld_al_area: totalArea,
        bld_area: buildingArea,
      },
    })),

  setFloorCount: (count) =>
    set((state) => ({
      formData: { ...state.formData, bld_floor_esurf: count },
    })),

  setZebGrade: (grade) =>
    set((state) => ({
      formData: { ...state.formData, zebGrade: grade },
    })),

  resetFormData: () =>
    set(() => ({
      formData: initialFormData,
    })),
});
