'use client';

import styles from './RenewableEdit.module.scss';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import { Flex } from 'antd';
import WindowThermalTransmittance from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/WindowThermalTransmittance/WindowThermalTransmittance';
import SolarPowerSystem from '@/components/main/RightContents/StandardModelPerformanceEdit/RenewableEdit/SolarPowerSystem/SolarPowerSystem';
import FuelCell from '@/components/main/RightContents/StandardModelPerformanceEdit/RenewableEdit/FuelCell/FuelCell';
import GeothermalHeatPump from '@/components/main/RightContents/StandardModelPerformanceEdit/RenewableEdit/GeothermalHeatPump/GeothermalHeatPump';
import SolarDomesticHotWaterSystem from '@/components/main/RightContents/StandardModelPerformanceEdit/RenewableEdit/SolarDomesticHotWaterSystem/SolarDomesticHotWaterSystem';

const thermalItems = [
  {
    key: 'window',
    title: '창호 열관류율',
    // 필요시 props 추가
  },
  {
    key: 'wall',
    title: '외벽 열관류율',
  },
  {
    key: 'roof',
    title: '지붕 열관류율',
  },
  {
    key: 'floor',
    title: '바닥 열관류율',
  },
];

const RenewableEdit = (props: any) => {
  return (
    <CollapseItem itemSize={4} title={'신재생'}>
      <Flex className={styles.wrapper} gap={21} wrap={'wrap'}>
        <SolarPowerSystem />
        <FuelCell />
        <GeothermalHeatPump />
        <SolarDomesticHotWaterSystem />
      </Flex>
    </CollapseItem>
  );
};

export default RenewableEdit;
