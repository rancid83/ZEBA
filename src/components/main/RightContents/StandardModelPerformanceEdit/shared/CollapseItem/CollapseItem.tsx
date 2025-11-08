'use client';

import styles from './CollapseItem.module.scss';
import { Collapse } from 'antd';
import React from 'react';

const CollapseItem = (props: any) => {
  return (
    <Collapse
      className={styles.energyDetailCollapse}
      expandIconPosition={'end'}
      size="small"
      defaultActiveKey={['active']}
      items={[
        {
          key: 'active',
          label: (
            <div className={styles.collapseTitle}>
              <span>{props.title}</span>
              <div>{`${props.itemSize} 항목`}</div>
            </div>
          ),
          children: <>{props.children}</>,
        },
      ]}
    />
  );
};

export default CollapseItem;
