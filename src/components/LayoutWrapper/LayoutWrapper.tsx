'use client';

import styles from './LayoutWrapper.module.scss';
import { useStore } from '@/store';
import LoadingAnalyzing from '@/components/LoadingAnalyzing/LoadingAnalyzing';

const LayoutWrapper = (props: any) => {
  const { isLoading } = useStore();

  return (
    <>
      {props.children} {isLoading && <LoadingAnalyzing />}
    </>
  );
};

export default LayoutWrapper;
