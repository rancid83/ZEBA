'use client';

import { Form, Radio, RadioChangeEvent, Select } from 'antd';
import styles from './SolarDomesticHotWaterSystem.module.scss';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { useState } from 'react';

const thermalItems = [
  {
    id: 'solarDomesticHotWaterSystem',
    type: 'template1',
    title: '태양열 급탕 시스템',
    start: 1487.5,
    min: 0,
    max: 2975,
    step: 0.01,
    average: 1487.5,
    rate: 1,
    solarOrientation: 'east',
    solarCollectorType: 'flatPlate',
  },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '평판형', value: 'flatPlate' },
  { label: '진공관형', value: 'evacuatedTube' },
];

const SolarDomesticHotWaterSystem = (props: any) => {
  const [solarType, setSolarType] = useState('Apple');

  const onChangeSolarType = ({ target: { value } }: RadioChangeEvent) => {
    setSolarType(value);
  };

  return (
    <Form
      initialValues={{
        solarOrientation: thermalItems[0].solarOrientation,
        solarCollectorType: thermalItems[0].solarCollectorType,
      }}
    >
      <div className={styles.wrap}>
        <div className={styles.fuelCellRadio}>
          <Form.Item name="solarCollectorType" style={{ marginBottom: 0 }}>
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChangeSolarType}
              optionType="button"
              value={solarType}
              buttonStyle="solid"
              size="small"
            />
          </Form.Item>
        </div>
        <div className={styles.editSlider}>
          <EditSlider {...thermalItems[0]} />
        </div>
        <div className={styles.positionSelect}>
          <Form.Item
            name="solarOrientation"
            label={'방위'}
            style={{ marginBottom: 0 }}
          >
            <Select
              style={{ width: 120 }}
              options={[
                { value: 'east', label: '동' },
                { value: 'southeast', label: '남동' },
                { value: 'south', label: '남' },
                { value: 'southwest', label: '남서' },
                { value: 'west', label: '서' },
                { value: 'horizontal', label: '수평' },
              ]}
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default SolarDomesticHotWaterSystem;
