'use client';

import { ConfigProvider } from 'antd';
import MandatoryZEBLevel from './MandatoryZEBLevel/MandatoryZEBLevel';
import EnergySelfSufficiency from './EnergySelfSufficiency/EnergySelfSufficiency';
import StandardModelPerformanceEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/StandardModelPerformanceEdit';
import LoadingAnalyzing from '@/components/LoadingAnalyzing/LoadingAnalyzing';
import { useEffect } from 'react';
import { useStore } from '@/store';

const SectionRight = () => {
  const { pageStep } = useStore();
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
      {pageStep < 2 ? <MandatoryZEBLevel /> : <StandardModelPerformanceEdit />}
      <EnergySelfSufficiency />
    </ConfigProvider>
  );
};

export default SectionRight;
