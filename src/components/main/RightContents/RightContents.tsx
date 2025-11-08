'use client';

import { ConfigProvider } from 'antd';
import MandatoryZEBLevel from './MandatoryZEBLevel/MandatoryZEBLevel';
import EnergySelfSufficiency from './EnergySelfSufficiency/EnergySelfSufficiency';
import StandardModelPerformanceEdit
  from '@/components/main/RightContents/StandardModelPerformanceEdit/StandardModelPerformanceEdit';

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
      <StandardModelPerformanceEdit/>
      <MandatoryZEBLevel />
      <EnergySelfSufficiency />
    </ConfigProvider>
  );
};

export default SectionRight;
