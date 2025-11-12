'use client';

import { Radio, RadioChangeEvent, Select } from 'antd';
import styles from './SolarDomesticHotWaterSystem.module.scss';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { useState } from 'react';

const thermalItems = [
  {
    type: 'template1',
    title: '태양열 급탕 시스템',
    start: 1487.5,
    min: 0,
    max: 2975,
    step: 0.01,
    average: 1487.5,
    rate: 1,
  },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '평판형', value: 'Apple', className: 'label-1' },
  { label: '진공관형', value: 'Pear', className: 'label-2' },
];

const SolarDomesticHotWaterSystem = (props: any) => {
  const [solarType, setSolarType] = useState('Apple');

  const onChangeSolarType = ({ target: { value } }: RadioChangeEvent) => {
    setSolarType(value);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.fuelCellRadio}>
        <Radio.Group
          options={optionsWithDisabled}
          onChange={onChangeSolarType}
          optionType="button"
          value={solarType}
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
          defaultValue="jack"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: '동' },
            { value: 'lucy', label: '남동' },
            { value: 'Yiminghe', label: '남' },
            { value: 'disabled', label: '남서' },
            { value: 'disabled2', label: '서' },
            { value: 'disabled3', label: '수평' },
          ]}
        />
      </div>
    </div>
  );
};

export default SolarDomesticHotWaterSystem;
