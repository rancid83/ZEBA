'use client';

import styles from './LayoutWrapper.module.scss';
import { useStore } from '@/store';
import LoadingAnalyzing from '@/components/LoadingAnalyzing/LoadingAnalyzing';
import { ConfigProvider } from 'antd';

const LayoutWrapper = (props: any) => {
  const { isLoading } = useStore();

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            horizontalMargin: '0',
          },
        },
        token: {
          colorPrimary: '#007676',
          colorInfo: '#007676',
          fontSize: 12,
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      {props.children} {isLoading && <LoadingAnalyzing />}
    </ConfigProvider>
  );
};

export default LayoutWrapper;
