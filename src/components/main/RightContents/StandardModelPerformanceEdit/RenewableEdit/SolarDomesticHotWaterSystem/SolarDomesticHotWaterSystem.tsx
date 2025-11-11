'use client';

import { Radio, Select } from 'antd';
import styles from './SolarDomesticHotWaterSystem.module.scss';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';
import { CheckboxGroupProps } from 'antd/es/checkbox';

const thermalItems = [
  {
    type: 'template1',
    title: '연료전지',
    start: 3.12,
    min: 1.5,
    max: 5,
    step: 0.01,
    average: 3.12,
    rate: 1,
  },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '평판형', value: 'Apple', className: 'label-1' },
  { label: '진공관형', value: 'Pear', className: 'label-2' },
];

const SolarDomesticHotWaterSystem = (props: any) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.fuelCellRadio}>
        <Radio.Group
          options={optionsWithDisabled}
          optionType="button"
          value={'Apple'}
          buttonStyle="solid"
          size="small"
        />
      </div>
      <div className={styles.editSlider}>
        <EditSlider {...thermalItems[0]} />
      </div>
      <div className={styles.positionSelect}>
        <span>방위</span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: '남동' },
            { value: 'lucy', label: '남서' },
            { value: 'Yiminghe', label: '북서' },
            { value: 'disabled', label: '북동' },
          ]}
        />
      </div>
    </div>
  );
};

export default SolarDomesticHotWaterSystem;
