'use client';

import styles from './PassiveEdit.module.scss';
import { Flex, InputNumber, Rate, Slider, SliderSingleProps } from 'antd';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import { useState } from 'react';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';
import WindowThermalTransmittance from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/WindowThermalTransmittance/WindowThermalTransmittance';

const PassiveEdit = (props: any) => {
  return (
    <CollapseItem itemSize={4} title={'패시브'}>
      <Flex className={styles.wrapper} gap={21}>
        <WindowThermalTransmittance />
      </Flex>
      <Flex className={styles.wrapper} gap={21}></Flex>
    </CollapseItem>
  );
};

export default PassiveEdit;
