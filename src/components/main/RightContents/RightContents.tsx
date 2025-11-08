'use client';

import { ConfigProvider } from 'antd';
import MandatoryZEBLevel from './MandatoryZEBLevel/MandatoryZEBLevel';
import EnergySelfSufficiency from './EnergySelfSufficiency/EnergySelfSufficiency';
import StandardModelPerformanceEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/StandardModelPerformanceEdit';

const SectionRight = () => {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Tabs: {
            horizontalMargin: '0',
          },
          Button: {},
        },
      }}
    >
      <MandatoryZEBLevel />
      <EnergySelfSufficiency />
      <StandardModelPerformanceEdit />
    </ConfigProvider>
  );
};

export default SectionRight;
