import { StateCreator } from 'zustand';
import { RenewableDataState, BuildingDataItem } from '../types';

export interface RenewableDataSlice extends RenewableDataState {
  renewableDataCost: BuildingDataItem[];
  setRenewableData: (data: BuildingDataItem[]) => void;
  setRenewableDataCost: (data: BuildingDataItem[]) => void;
  updateRenewableDataItem: (
    index: number,
    updates: Partial<BuildingDataItem>,
  ) => void;
  resetRenewableData: () => void;
  resetRenewableDataCost: () => void;
}

export const createRenewableDataSlice: StateCreator<RenewableDataSlice> = (
  set,
) => ({
  renewableData: [],
  renewableDataCost: [],

  setRenewableData: (data: BuildingDataItem[]) => set({ renewableData: data }),

  setRenewableDataCost: (data: BuildingDataItem[]) =>
    set({ renewableDataCost: data }),

  updateRenewableDataItem: (
    index: number,
    updates: Partial<BuildingDataItem>,
  ) =>
    set((state) => ({
      renewableData: state.renewableData.map((item, i) =>
        i === index ? { ...item, ...updates } : item,
      ),
    })),

  resetRenewableData: () => set({ renewableData: [] }),

  resetRenewableDataCost: () => set({ renewableDataCost: [] }),
});
