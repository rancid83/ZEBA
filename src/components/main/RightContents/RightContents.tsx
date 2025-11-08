'use client';

import { ConfigProvider } from 'antd';
import MandatoryZEBLevel from './MandatoryZEBLevel/MandatoryZEBLevel';
import EnergySelfSufficiency from './EnergySelfSufficiency/EnergySelfSufficiency';

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
    </ConfigProvider>
  );
};

export default SectionRight;
