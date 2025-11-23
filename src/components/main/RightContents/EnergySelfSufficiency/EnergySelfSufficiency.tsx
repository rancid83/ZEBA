'use client';

import { Tabs } from 'antd';
import { useStore } from '@/store';
import EnergySelfSufficiencyContent from './EnergySelfSufficiencyContent/EnergySelfSufficiencyContent';
import EnergyBuildingDetail from './EnergyBuildingDetail/EnergyBuildingDetail';
import EnergyDetail from './EnergyDetail/EnergyDetail';

const EnergySelfSufficiency = () => {
  const { activeTab, setActiveTab } = useStore();

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Tabs
      activeKey={activeTab}
      onChange={handleTabChange}
      type="card"
      size="large"
      style={{ marginTop: '51px' }}
      items={[
        {
          label: `에너지 자립률`,
          key: '1',
          children: (
            <>
              <EnergySelfSufficiencyContent tap={1} />
              <EnergyDetail />
            </>
          ),
          style: { margin: 0 },
        },
        {
          label: `시공 비용`,
          key: '2',
          children: (
            <>
              <EnergySelfSufficiencyContent tap={2} />
              <EnergyBuildingDetail />
            </>
          ),
          style: { margin: 0 },
        },
      ]}
    />
  );
};

export default EnergySelfSufficiency;
