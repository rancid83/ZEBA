'use client';

import styles from './GeothermalHeatPump.module.scss';
import {
  ConfigProvider,
  Flex,
  Input,
  Radio,
  RadioChangeEvent,
  Rate,
  Table,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { useState } from 'react';

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '가스', value: 'Apple', className: 'label-1' },
  { label: '전기', value: 'Pear', className: 'label-2' },
];

const GeothermalHeatPump = (props: any) => {
  const [heatPumpType, setHeatPumpType] = useState('Apple');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setHeatPumpType(value);
  };

  return (
    <div className={styles.editWrap}>
      <Flex
        justify="space-between"
        align={'center'}
        style={{ position: 'relative' }}
      >
        <span className={styles.editTitle}>GSHP(지열히트펌프)</span>
        <Rate disabled defaultValue={3} count={3} />
        <div className={styles.fuelCellRadio}>
          <Radio.Group
            options={optionsWithDisabled}
            onChange={onChange1}
            optionType="button"
            value={heatPumpType}
            buttonStyle="solid"
            size="small"
          />
        </div>
      </Flex>
      <div style={{ marginTop: '30px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th className={styles.thGeoThermalText}>
                에너지 요구량
                <div>[kW]</div>
              </th>
              <th className={styles.thGeoThermalText}>
                성능비
                <div>[COP]</div>
              </th>
              <th className={styles.thGeoThermalText}>
                에너지 요구량
                <div>[kWh/y]</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <div
                  className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
                >
                  냉방
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <div>
                  <Input value={'72.49'} />
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <div>
                  <Input value={'1.89'} />
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <div>
                  <Input value={'72.49'} />
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <div
                  className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
                >
                  난방
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <div>
                  <Input value={'109.22'} />
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <div>
                  <Input value={'1.32'} />
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <div>
                  <Input value={'109.22'} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeothermalHeatPump;
