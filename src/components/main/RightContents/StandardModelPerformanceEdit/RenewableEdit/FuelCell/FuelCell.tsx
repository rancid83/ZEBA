'use client';

import styles from './FuelCell.module.scss';
import { Flex, Radio, Rate } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';

const thermalItems = [
  {
    type: 'template2',
    title: '',
    start: 87.8,
    min: 70,
    max: 100,
    step: 0.1,
    average: 85,
    rate: 1,
    systemType: '급탕',
    unit: '%',
    subDescription: '열생산 능력',
  },
  {
    type: 'template2',
    title: '',
    start: 87.8,
    min: 70,
    max: 100,
    step: 0.1,
    average: 85,
    rate: 1,
    systemType: '급탕',
    unit: '%',
    subDescription: '열생산 효율',
  },
  {
    type: 'template2',
    title: '',
    start: 87.8,
    min: 70,
    max: 100,
    step: 0.1,
    average: 85,
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
            optionType="button"
            value={'Apple'}
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
