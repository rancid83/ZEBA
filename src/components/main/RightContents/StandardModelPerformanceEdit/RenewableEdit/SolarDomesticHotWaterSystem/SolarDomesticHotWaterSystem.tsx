import { useState } from 'react';
import {
  ConfigProvider,
  Flex,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  SliderSingleProps,
} from 'antd';
import styles from './SolarDomesticHotWaterSystem.module.scss';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';
import { CheckboxGroupProps } from 'antd/es/checkbox';

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '평판형', value: 'Apple', className: 'label-1' },
  { label: '진공관형', value: 'Pear', className: 'label-2' },
];

const SolarDomesticHotWaterSystem = (props: any) => {
  const [value, setValue] = useState([0, 26, 37]);

  const start = value[0] / 100;
  const end = value[value.length - 1] / 100;

  const marks: SliderSingleProps['marks'] = {
    0: '개선',
    26: '표준',
    100: {
      style: {
        color: '#4E4E4E',
      },
      label: '저하',
    },
  };

  const onChangeValue = (newValue: number) => {};

  return (
    <div className={styles.editWrap}>
      <Flex
        justify="space-between"
        align={'center'}
        style={{ position: 'relative' }}
      >
        <span className={styles.editTitle}>태양열 급탕 시스템</span>
        <Rate disabled defaultValue={3} count={3} />
        <div className={styles.fuelCellRadio}>
          <ConfigProvider
            theme={{
              components: {
                Radio: {
                  colorPrimary: '#00B2A9',
                  fontSize: 10,
                },
              },
            }}
          >
            <Radio.Group
              options={optionsWithDisabled}
              optionType="button"
              value={'Apple'}
              buttonStyle="solid"
              size="small"
            />
          </ConfigProvider>
        </div>
      </Flex>
      <Flex className={styles.sliderWrapper}>
        <div>
          <Slider
            marks={marks}
            defaultValue={26}
            onChange={onChangeValue}
            className={styles.sliderClass}
            styles={{
              track: {
                background: 'transparent',
              },
              tracks: {
                background: `linear-gradient(to right, ${getGradientColor(start)} 0%, ${getGradientColor(
                  end,
                )} 100%)`,
              },
            }}
          />
        </div>
        <div>
          <InputNumber min={0} max={100} defaultValue={26} />
          <div className={styles.sliderNumberUnit}>[W/㎡·K]</div>
        </div>
      </Flex>
      <div className={styles.controller}>
        <Flex gap={10} justify="right">
          <SyncOutlined />
          <div className={styles.enhance}>
            <CaretDownOutlined />
            <span>0.24</span>개선
          </div>
        </Flex>
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
    </div>
  );
};

const getGradientColor = (percentage: number) => {
  const startColor = [42, 78, 81];
  const endColor = [213, 250, 252];

  const midColor = startColor.map((start, i) => {
    const end = endColor[i];
    const delta = end - start;
    return (start + delta * percentage).toFixed(0);
  });

  return `rgb(${midColor.join(',')})`;
};

export default SolarDomesticHotWaterSystem;
