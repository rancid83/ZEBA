'use client';

import styles from './FuelCell.module.scss';
import { Flex, Radio, RadioChangeEvent, Rate } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';
import { useState } from 'react';

const thermalItems = [
  {
    type: 'template2',
    title: '',
    start: 50,
    min: 0,
    max: 100,
    step: 0.01,
    average: 50,
    rate: 1,
    systemType: '급탕',
    unit: '%',
    subDescription: '열생산 능력',
  },
  {
    type: 'template2',
    title: '',
    start: 50,
    min: 20,
    max: 80,
    step: 0.01,
    average: 50,
    rate: 1,
    systemType: '급탕',
    unit: '%',
    subDescription: '열생산 효율',
  },
  {
    type: 'template2',
    title: '',
    start: 45,
    min: 10,
    max: 80,
    step: 0.01,
    average: 45,
    rate: 1,
    systemType: '급탕',
    unit: '%',
    subDescription: '발전 효율',
  },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: 'PEMFC', value: 'Apple', className: 'label-1' },
  { label: 'SOFC', value: 'Pear', className: 'label-2' },
];

const FuelCell = (props: any) => {
  const [fuelType, setFuelType] = useState('Apple');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setFuelType(value);
  };

  return (
    <div className={styles.editWrap}>
      <Flex
        justify="space-between"
        align={'center'}
        style={{ position: 'relative' }}
      >
        <span className={styles.editTitle}>연료전지</span>
        <Rate disabled defaultValue={3} count={3} />
        <div className={styles.fuelCellRadio}>
          <Radio.Group
            options={optionsWithDisabled}
            onChange={onChange1}
            optionType="button"
            value={fuelType}
            buttonStyle="solid"
            size="small"
          />
        </div>
      </Flex>
      {thermalItems.map((item, index) => (
        <div className={styles.editorSliderWrap}>
          <EditSlider {...item} />
        </div>
      ))}
    </div>
  );
};

export default FuelCell;
