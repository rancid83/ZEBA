import { useState } from 'react';
import { Flex, InputNumber, Rate, Slider, SliderSingleProps } from 'antd';
import styles from '@/components/main/RightContents/StandardModelPerformanceEdit/ActiveEdit/ElectricHeatPump/ElectricHeatPump.module.scss';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';
import PassiveEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/PassiveEdit';

interface ElectricHeatPumpProps {
  title: string;
  type?: string;
  color?: string;
  typeText?: string;
  unit?: string;
}

const ElectricHeatPump = ({
  title,
  type,
  color,
  typeText,
  unit,
}: ElectricHeatPumpProps) => {
  const [value, setValue] = useState([0, 26, 37]);

  const start = value[0] / 100;
  const end = value[value.length - 1] / 100;
  const isHeatRecoveryVentilator = type === 'HeatRecoveryVentilator';

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
    <div
      className={`${styles.editWrap} ${isHeatRecoveryVentilator ? styles.fullWidth : ''}`}
    >
      <Flex justify="space-between" align={'center'}>
        <span className={styles.editTitle}>{title}</span>
        <Flex align="center" gap={10}>
          <div
            style={{ background: `${color}` }}
            className={styles.typeTextWrapper}
          >
            {typeText}
          </div>
          <Rate disabled defaultValue={3} count={3} />
        </Flex>
      </Flex>
      {isHeatRecoveryVentilator ? (
        <Flex gap={50}>
          <div style={{ position: 'relative', width: '100%' }}>
            <Flex className={styles.sliderWrapper}>
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
              <div
                className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
              >
                냉방 효율
              </div>
              <div>
                <InputNumber min={0} max={100} defaultValue={26} />
                <div className={styles.sliderNumberUnit}>{`[${unit}]`}</div>
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
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <Flex className={styles.sliderWrapper}>
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
              <div
                className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
              >
                난방 효율
              </div>

              <div>
                <InputNumber min={0} max={100} defaultValue={26} />
                <div className={styles.sliderNumberUnit}>{`[${unit}]`}</div>
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
            </div>
          </div>
        </Flex>
      ) : (
        <>
          <Flex className={styles.sliderWrapper}>
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

            <div>
              <InputNumber min={0} max={100} defaultValue={26} />
              <div className={styles.sliderNumberUnit}>{`[${unit}]`}</div>
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
          </div>
        </>
      )}
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

export default ElectricHeatPump;
