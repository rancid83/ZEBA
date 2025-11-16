'use client';

import styles from './GeothermalHeatPump.module.scss';
import {
  ConfigProvider,
  Flex,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Rate,
  Table,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { useState } from 'react';

const thermalItems = [
  {
    id: 'geothermalHeatPump',
    title: 'GSHP(지열히트펌프)',
    rate: 3,
    coolingEnergyDemand: '72.49',
    coolingCOP: '1.89',
    coolingEnergyConsumption: '72.49',
    heatingEnergyDemand: '109.22',
    heatingCOP: '1.32',
    heatingEnergyConsumption: '109.22',
  },
];

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
    <Form
      initialValues={{
        coolingEnergyDemand: thermalItems[0].coolingEnergyDemand,
        coolingCOP: thermalItems[0].coolingCOP,
        coolingEnergyConsumption: thermalItems[0].coolingEnergyConsumption,
        heatingEnergyDemand: thermalItems[0].heatingEnergyDemand,
        heatingCOP: thermalItems[0].heatingCOP,
        heatingEnergyConsumption: thermalItems[0].heatingEnergyConsumption,
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
                    <Form.Item
                      name="coolingEnergyDemand"
                      rules={[{ required: true, message: '' }]}
                      style={{ margin: 0 }}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </td>
                <td style={{ padding: '8px' }}>
                  <div>
                    <Form.Item
                      name="coolingCOP"
                      rules={[{ required: true, message: '' }]}
                      style={{ margin: 0 }}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </td>
                <td style={{ padding: '8px' }}>
                  <div>
                    <Form.Item
                      name="coolingEnergyConsumption"
                      rules={[{ required: true, message: '' }]}
                      style={{ margin: 0 }}
                    >
                      <Input />
                    </Form.Item>
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
                    <Form.Item
                      name="heatingEnergyDemand"
                      rules={[{ required: true, message: '' }]}
                      style={{ margin: 0 }}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </td>
                <td style={{ padding: '8px' }}>
                  <div>
                    <Form.Item
                      name="heatingCOP"
                      rules={[{ required: true, message: '' }]}
                      style={{ margin: 0 }}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </td>
                <td style={{ padding: '8px' }}>
                  <div>
                    <Form.Item
                      name="heatingEnergyConsumption"
                      rules={[{ required: true, message: '' }]}
                      style={{ margin: 0 }}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Form>
  );
};

export default GeothermalHeatPump;
