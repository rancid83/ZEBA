// 모든 컴포넌트의 id를 수집한 타입 정의
export type ComponentId =
  | 'windowUValue'
  | 'wallUValue'
  | 'roofUValue'
  | 'floorUValue'
  | 'ehpCooling'
  | 'ehpHeating'
  | 'ghpCooling'
  | 'ghpHeating'
  | 'lightingDensity'
  | 'electricBoiler'
  | 'ventilator'
  | 'ventilatorChild1'
  | 'ventilatorChild2'
  | 'solarPowerSystem'
  | 'installationCapacity'
  | 'generationEfficiency'
  | 'solarDomesticHotWaterSystem'
  | 'geothermalHeatPump'
  | 'fuelCell'
  | 'heatProductionCapacity'
  | 'heatProductionEfficiency'
  | 'powerGenerationEfficiency';

// 각 항목의 데이터 구조
export interface ItemData {
  id: string;
  title?: string | null;
  value?: number | string | null;
  rate?: number | null;
  type?: string | null;
  start?: number | null;
  min?: number | null;
  max?: number | null;
  step?: number | null;
  average?: number | null;
  systemType?: string | null;
  unit?: string | null;
  subDescription?: string | null;
  solarOrientation?: string | null;
  solarCollectorType?: string | null;
  coolingEnergyDemand?: string | null;
  coolingCOP?: string | null;
  coolingEnergyConsumption?: string | null;
  heatingEnergyDemand?: string | null;
  heatingCOP?: string | null;
  heatingEnergyConsumption?: string | null;
  fuelCellType?: string | null;
  children?: ItemData[] | null;
}

// 초기 데이터 생성 함수
const createInitialData = (): Record<ComponentId, ItemData> => {
  const initialItems = [
    {
      id: 'windowUValue',
      title: '창호 열관류율',
      type: 'template1',
      start: 2,
      min: 0.5,
      max: 3.5,
      step: 0.01,
      average: 2,
      rate: 3,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'wallUValue',
      title: '외벽 열관류율',
      type: 'template1',
      start: 0.25,
      min: 0.0,
      max: 0.5,
      step: 0.01,
      average: 0.25,
      rate: 1,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'roofUValue',
      title: '지붕 열관류율',
      type: 'template1',
      start: 0.5,
      min: 0.0,
      max: 1.0,
      step: 0.01,
      average: 0.5,
      rate: 1,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'floorUValue',
      title: '바닥 열관류율',
      type: 'template1',
      start: 0.25,
      min: 0.0,
      max: 0.5,
      step: 0.01,
      average: 0.25,
      rate: 1,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'ehpCooling',
      title: 'EHP(전기히트펌프)',
      type: 'template1',
      start: 4.0,
      min: 2.0,
      max: 6.0,
      step: 0.01,
      average: 4.0,
      rate: 1,
      systemType: '냉방',
      unit: 'COP',
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'ehpHeating',
      title: 'EHP(전기히트펌프)',
      type: 'template1',
      start: 3.25,
      min: 1.5,
      max: 5.0,
      step: 0.01,
      average: 3.25,
      rate: 3,
      systemType: '난방',
      unit: 'COP',
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'ghpCooling',
      title: 'GHP(가스히트펌프)',
      type: 'template1',
      start: 1.5,
      min: 1.0,
      max: 2.0,
      step: 0.01,
      average: 1.5,
      rate: 1,
      systemType: '냉방',
      unit: 'COP',
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'ghpHeating',
      title: 'GHP(가스히트펌프)',
      type: 'template1',
      start: 1.75,
      min: 1.0,
      max: 2.5,
      step: 0.01,
      average: 1.75,
      rate: 1,
      systemType: '난방',
      unit: 'COP',
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'lightingDensity',
      title: '조명밀도',
      type: 'template1',
      start: 7.5,
      min: 3.0,
      max: 12.0,
      step: 0.01,
      average: 7.5,
      rate: 3,
      systemType: '조명',
      unit: 'W/m²',
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'electricBoiler',
      title: '전기보일러',
      type: 'template1',
      start: 85,
      min: 70,
      max: 100,
      step: 0.01,
      average: 85,
      rate: 1,
      systemType: '급탕',
      unit: '%',
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'ventilator',
      title: '전열 교환기',
      type: 'template2',
      start: null,
      min: null,
      max: null,
      step: null,
      average: null,
      rate: 1,
      systemType: '환기',
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: [
        {
          id: 'ventilatorChild1',
          title: '',
          type: 'template2',
          start: 0.6,
          min: 0.4,
          max: 0.8,
          step: 0.01,
          average: 0.6,
          rate: null,
          systemType: null,
          unit: '%',
          subDescription: null,
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
        {
          id: 'ventilatorChild2',
          title: '',
          type: 'template2',
          start: 0.65,
          min: 0.5,
          max: 0.8,
          step: 0.01,
          average: 0.65,
          rate: null,
          systemType: null,
          unit: '%',
          subDescription: null,
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
      ],
    },
    {
      id: 'solarPowerSystem',
      title: '태양광 발전 시스템',
      type: 'template2',
      start: null,
      min: null,
      max: null,
      step: null,
      average: null,
      rate: 2,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: [
        {
          id: 'installationCapacity',
          title: '',
          type: 'template2',
          start: 297.5,
          min: 0,
          max: 595,
          step: 0.01,
          average: 297.5,
          rate: 1,
          systemType: null,
          unit: '%',
          subDescription: '설치 용량',
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
        {
          id: 'generationEfficiency',
          title: '',
          type: 'template2',
          start: 0.175,
          min: 0.1,
          max: 0.25,
          step: 0.01,
          average: 0.175,
          rate: 1,
          systemType: null,
          unit: '%',
          subDescription: '발전 효율',
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
      ],
    },
    {
      id: 'solarDomesticHotWaterSystem',
      title: '태양열 급탕 시스템',
      type: 'template1',
      start: 1487.5,
      min: 0,
      max: 2975,
      step: 0.01,
      average: 1487.5,
      rate: 1,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: 'east',
      solarCollectorType: 'flatPlate',
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: null,
      children: null,
    },
    {
      id: 'geothermalHeatPump',
      title: 'GSHP(지열히트펌프)',
      type: null,
      start: null,
      min: null,
      max: null,
      step: null,
      average: null,
      rate: 3,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: '72.49',
      coolingCOP: '1.89',
      coolingEnergyConsumption: '72.49',
      heatingEnergyDemand: '109.22',
      heatingCOP: '1.32',
      heatingEnergyConsumption: '109.22',
      fuelCellType: null,
      children: null,
    },
    {
      id: 'fuelCell',
      title: '연료전지',
      type: null,
      start: null,
      min: null,
      max: null,
      step: null,
      average: null,
      rate: 3,
      systemType: null,
      unit: null,
      subDescription: null,
      solarOrientation: null,
      solarCollectorType: null,
      coolingEnergyDemand: null,
      coolingCOP: null,
      coolingEnergyConsumption: null,
      heatingEnergyDemand: null,
      heatingCOP: null,
      heatingEnergyConsumption: null,
      fuelCellType: 'pemfc',
      children: [
        {
          id: 'heatProductionCapacity',
          title: '',
          type: 'template2',
          start: 50,
          min: 0,
          max: 100,
          step: 0.01,
          average: 50,
          rate: 1,
          systemType: '급탕',
          unit: '%',
          subDescription: '열생산 능력',
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
        {
          id: 'heatProductionEfficiency',
          title: '',
          type: 'template2',
          start: 50,
          min: 20,
          max: 80,
          step: 0.01,
          average: 50,
          rate: 1,
          systemType: '급탕',
          unit: '%',
          subDescription: '열생산 효율',
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
        {
          id: 'powerGenerationEfficiency',
          title: '',
          type: 'template2',
          start: 45,
          min: 10,
          max: 80,
          step: 0.01,
          average: 45,
          rate: 1,
          systemType: '급탕',
          unit: '%',
          subDescription: '발전 효율',
          solarOrientation: null,
          solarCollectorType: null,
          coolingEnergyDemand: null,
          coolingCOP: null,
          coolingEnergyConsumption: null,
          heatingEnergyDemand: null,
          heatingCOP: null,
          heatingEnergyConsumption: null,
          fuelCellType: null,
          children: null,
        },
      ],
    },
  ];

  // 모든 id를 수집하여 플랫 구조로 매핑
  const data: Record<ComponentId, ItemData> = {} as Record<
    ComponentId,
    ItemData
  >;

  const collectIds = (items: ItemData[]) => {
    items.forEach((item) => {
      // 메인 아이템 추가
      data[item.id as ComponentId] = {
        ...item,
        value: null, // 초기값은 null로 설정
      };

      // children이 있다면 재귀적으로 처리
      if (item.children) {
        collectIds(item.children);
      }
    });
  };

  collectIds(initialItems);

  return data;
};

// Zustand slice 인터페이스
export interface StandardModelPerformanceSlice {
  standardModelPerformanceData: Record<ComponentId, ItemData>;

  // Actions
  updateItemValue: (id: ComponentId, itemData: ItemData) => void;
  updateItemData: (id: ComponentId, data: Partial<ItemData>) => void;
  updateMultipleItems: (
    updates: Record<ComponentId, Partial<ItemData>>,
  ) => void;
  resetStandardModelPerformance: () => void;
  getItemById: (id: ComponentId) => ItemData | undefined;
}

// Zustand slice 생성 함수
export const createStandardModelPerformanceSlice = (
  set: any,
  get: any,
): StandardModelPerformanceSlice => ({
  standardModelPerformanceData: createInitialData(),

  updateItemValue: (id: ComponentId, itemData: ItemData) =>
    set(
      (state: {
        standardModelPerformanceData: Record<ComponentId, ItemData>;
      }) => {
        if (state.standardModelPerformanceData[id]) {
          state.standardModelPerformanceData[id] = itemData;
        }
      },
    ),

  updateItemData: (id: ComponentId, data: Partial<ItemData>) =>
    set((state: { standardModelPerformanceData: { [x: string]: any } }) => {
      if (state.standardModelPerformanceData[id]) {
        state.standardModelPerformanceData[id] = {
          ...state.standardModelPerformanceData[id],
          ...data,
        };
      }
    }),

  updateMultipleItems: (updates: Record<ComponentId, Partial<ItemData>>) =>
    set((state: { standardModelPerformanceData: { [x: string]: any } }) => {
      Object.entries(updates).forEach(([id, data]) => {
        if (state.standardModelPerformanceData[id as ComponentId]) {
          state.standardModelPerformanceData[id as ComponentId] = {
            ...state.standardModelPerformanceData[id as ComponentId],
            ...data,
          };
        }
      });
    }),

  resetStandardModelPerformance: () =>
    set(
      (state: {
        standardModelPerformanceData: Record<ComponentId, ItemData>;
      }) => {
        state.standardModelPerformanceData = createInitialData();
      },
    ),

  getItemById: (id: ComponentId) => {
    const state = get();
    return state.standardModelPerformanceData[id];
  },
});
