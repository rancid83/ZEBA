'use client';

import { useState, useMemo } from 'react';
import { Flex, InputNumber, Rate, Slider, SliderSingleProps } from 'antd';
import styles from './EditSlider.module.scss';
import {
  CaretDownOutlined,
  CaretUpOutlined,
  DislikeOutlined,
  LikeOutlined,
  SyncOutlined,
} from '@ant-design/icons';

interface WindowThermalTransmittanceProps {
  title: string;
  min?: number;
  max?: number;
  average?: number;
  step?: number;
  start?: number;
  unit?: string;
  rate?: number;
  systemType?: string | null;
  subDescription?: string | null;
  type?: string;
}

const EditSlider = ({
  title,
  min = 0,
  max = 100,
  average = 26,
  step = 1,
  start = 26,
  unit = 'W/㎡·K',
  rate = 3,
  systemType = null,
  subDescription = null,
  type = 'template1',
}: WindowThermalTransmittanceProps) => {
  const [currentValue, setCurrentValue] = useState(start);

  const marks: SliderSingleProps['marks'] = {
    [min]: {
      style: {
        color: '#4E4E4E',
        position: 'relative',
      },
      label: (
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-52px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#92E9EF',
              whiteSpace: 'nowrap',
              lineHeight: '1.3',
            }}
          >
            개선
            <br />
            <LikeOutlined />
          </div>
          <div style={{ marginTop: '3.5px' }}>{min.toFixed(1)}</div>
        </div>
      ),
    },
    [average]: {
      label: (
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-52px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#2A4E51',
              whiteSpace: 'nowrap',
              lineHeight: '1.3',
            }}
          >
            표준
            <br />
            <CaretDownOutlined />
          </div>
          <div style={{ marginTop: '3.5px' }}></div>
        </div>
      ),
    },
    [max]: {
      style: {
        color: '#4E4E4E',
      },
      label: (
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-52px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#007676',
              whiteSpace: 'nowrap',
              lineHeight: '1.3',
            }}
          >
            저하
            <br />
            <DislikeOutlined />
          </div>
          <div style={{ marginTop: '3.5px' }}>{max.toFixed(1)}</div>
        </div>
      ),
    },
  };

  const onChangeValue = (newValue: number) => {
    setCurrentValue(newValue);
  };

  // Rail(배경)의 색상을 메모이제이션
  const railBackground = useMemo(() => {
    const standard = average;
    const range = max - min;
    const currentPercent =
      ((Math.min(Math.max(currentValue, min), max) - min) / range) * 100;
    const standardPercent =
      ((Math.min(Math.max(standard, min), max) - min) / range) * 100;

    if (currentValue < standard) {
      // 왼쪽으로 움직였을 때: 현재값부터 표준까지 초록색으로 배경 변경
      return `linear-gradient(to right, #d9d9d9 0%, #d9d9d9 ${currentPercent}%, #1DB5BE ${currentPercent}%, #1DB5BE ${standardPercent}%, #d9d9d9 ${standardPercent}%, #d9d9d9 100%)`;
    } else {
      // 표준값이거나 오른쪽으로 움직였을 때: 0부터 표준까지 초록색
      return `linear-gradient(to right, #1DB5BE 0%, #1DB5BE ${standardPercent}%, #d9d9d9 ${standardPercent}%, #d9d9d9 100%)`;
    }
  }, [currentValue, min, max, average]);

  // Track(선택된 부분)의 색상을 메모이제이션
  const trackBackground = useMemo(() => {
    const standard = average;
    const range = max - min;
    const currentPercent =
      ((Math.min(Math.max(currentValue, min), max) - min) / range) * 100;
    const standardPercent =
      ((Math.min(Math.max(standard, min), max) - min) / range) * 100;

    if (currentValue < standard) {
      // 왼쪽으로 움직였을 때: track은 기본색상
      return '#2A4E51';
    } else if (currentValue > standard) {
      // 오른쪽으로 움직였을 때: 0~표준은 기본색, 표준~현재값은 연한색
      const standardRatio = (standardPercent / currentPercent) * 100;
      return `linear-gradient(to right, #2A4E51 0%, #2A4E51 ${standardRatio}%, #D5FAFC ${standardRatio}%, #D5FAFC 100%)`;
    } else {
      // 표준값일 때는 전체 기본색상
      return '#2A4E51';
    }
  }, [currentValue, min, max, average]);

  // 슬라이더 스타일 객체를 메모이제이션하여 깜빡임 방지
  const sliderStyles = useMemo(
    () => ({
      rail: {
        background: railBackground,
      },
      track: {
        background: trackBackground,
      },
      tracks: {
        background: 'transparent',
      },
    }),
    [railBackground, trackBackground],
  );

  // 개선/저하 섹션의 동적 값들을 계산
  const enhanceData = useMemo(() => {
    const standard = average;
    const difference = Math.abs(currentValue - standard);

    if (currentValue < standard) {
      // 왼쪽으로 움직였을 때: 저하
      return {
        text: '저하',
        value: difference.toFixed(2),
        icon: <CaretDownOutlined />,
        backgroundColor: '#92E9EF',
      };
    } else if (currentValue > standard) {
      // 오른쪽으로 움직였을 때: 개선
      return {
        text: '개선',
        value: difference.toFixed(2),
        icon: <CaretUpOutlined />,
        backgroundColor: '#007676', // 기본 배경 유지
      };
    } else {
      // 표준값일 때
      return {
        text: '표준',
        value: '-',
        icon: null,
        backgroundColor: '#CECECE',
      };
    }
  }, [currentValue, average]);

  const systemTypeColor = (systemType: string) => {
    switch (systemType) {
      case '냉방':
        return '#1D4BBE';
      case '난방':
        return '#BE1D1D';
      case '조명':
        return '#F5CA2F';
      case '급탕':
        return '#F38130';
      default:
        return '#1D4BBE';
    }
  };

  return (
    <div
      className={`${styles.editWrap} ${type === 'template2' ? styles.editWrapTemplate2 : ''}`}
    >
      <Flex justify="space-between" align={'center'}>
        <span className={styles.editTitle}>{title}</span>
        {type === 'template1' &&
          (systemType ? (
            <Flex align="center" gap={10}>
              <div
                style={{ background: `${systemTypeColor(systemType)}` }}
                className={styles.typeTextWrapper}
              >
                {systemType}
              </div>
              <Rate
                disabled
                value={rate}
                count={3}
                style={{ direction: 'rtl' }}
              />
            </Flex>
          ) : (
            <Rate
              disabled
              value={rate}
              count={3}
              style={{ direction: 'rtl' }}
            />
          ))}
      </Flex>
      <Flex className={styles.sliderWrapper}>
        <div>
          <Slider
            marks={marks}
            value={currentValue}
            onChange={onChangeValue}
            className={styles.sliderClass}
            styles={sliderStyles}
            min={min}
            max={max}
            step={step}
          />
        </div>

        {subDescription && (
          <div
            className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
          >
            {subDescription}
          </div>
        )}
        <div>
          <InputNumber
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={(value) => value !== null && onChangeValue(value)}
          />
          <div className={styles.sliderNumberUnit}>[{unit}]</div>
        </div>
      </Flex>
      <div className={styles.controller}>
        <Flex gap={10} justify="right">
          <SyncOutlined
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(180deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
            onClick={() => setCurrentValue(average)}
          />
          <div
            className={styles.enhance}
            style={{ backgroundColor: enhanceData.backgroundColor }}
          >
            {enhanceData.icon}
            <span>{enhanceData.value}</span>
            {enhanceData.text}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default EditSlider;
