'use client';

import styles from './FuelCell.module.scss';
import { Flex, Form, Radio, RadioChangeEvent, Rate } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';
import { useState } from 'react';

const thermalItems = [
  {
    id: 'fuelCell',
    title: '연료전지',
    rate: 3,
    fuelCellType: 'pemfc',
    children: [
      {
        id: 'heatProductionCapacity',
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
        id: 'heatProductionEfficiency',
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
        id: 'powerGenerationEfficiency',
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
    ],
  },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: 'PEMFC', value: 'pemfc', className: 'label-1' },
  { label: 'SOFC', value: 'sofc', className: 'label-2' },
];

const FuelCell = (props: any) => {
  const [fuelType, setFuelType] = useState('Apple');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setFuelType(value);
  };

  return (
    <Form
      initialValues={{
        fuelCellType: thermalItems[0].fuelCellType,
      }}
    >
      <div className={styles.editWrap}>
        <Flex
          justify="space-between"
          align={'center'}
          style={{ position: 'relative' }}
        >
          <span className={styles.editTitle}>{thermalItems[0].title}</span>
          <Rate
            disabled
            value={thermalItems[0].rate}
            count={3}
            style={{ direction: 'rtl' }}
          />
          <div className={styles.fuelCellRadio}>
            <Form.Item name="fuelCellType">
              <Radio.Group
                options={optionsWithDisabled}
                onChange={onChange1}
                optionType="button"
                value={fuelType}
                buttonStyle="solid"
                size="small"
              />
            </Form.Item>
          </div>
        </Flex>
        {thermalItems[0].children.map((item, index) => (
          <div className={styles.editorSliderWrap}>
            <EditSlider {...item} />
          </div>
        ))}
      </div>
    </Form>
  );
};

export default FuelCell;
