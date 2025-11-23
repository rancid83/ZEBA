'use client';

import React, { useEffect, useState } from 'react';
import { Collapse, Flex, Table, TableProps } from 'antd';
import styles from './EnergyDetail.module.scss';
import { useStore } from '@/store';

const EnergyDetail = () => {
  const { passiveData, activeData, renewableData } = useStore();

  const columns: TableProps<any>['columns'] = [
    {
      title: '항목',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <>{text}</>,
    },
    {
      title: '법규 기준',
      dataIndex: 'regulation',
      key: 'regulation',
      align: 'center',
    },
    {
      title: '의무 등급',
      dataIndex: 'mandatory',
      key: 'mandatory',
      align: 'center',
    },
    {
      title: '목표 등급',
      dataIndex: 'target',
      key: 'target',
      align: 'center',
    },
    {
      title: '성능 조합 등급',
      dataIndex: 'combined',
      key: 'combined',
      align: 'center',
    },
  ];

  return (
    <>
      <div className={`${styles.mandatoryGradeContainer} `}>
        <div className={styles.mandatoryGrade}>
          <div className={styles.mandatoryGradeHeader}>
            <img
              src="/assets/images/icon/icon-stack.png"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.title}>성능 내역 비교</span>
          </div>

          <div className={styles.EnergyDetailTitle}>
            <Flex className={styles.detailDescription}>
              <span>에너지 성능 관련 상세 항목을 표로 보여줍니다.</span>
            </Flex>
            {/* 패시브 Collapse */}
            <Collapse
              className={styles.energyDetailCollapse}
              expandIconPosition={'end'}
              size="small"
              items={[
                {
                  key: 'passive',
                  label: (
                    <div className={styles.collapseTitle}>
                      패시브<div>{`${passiveData.length} 항목`}</div>
                    </div>
                  ),
                  children: (
                    <Table<any>
                      columns={columns}
                      dataSource={passiveData}
                      pagination={false}
                      rowKey={(record) => record.name}
                    />
                  ),
                },
              ]}
            />

            {/* 액티브 Collapse */}
            <Collapse
              className={styles.energyDetailCollapse}
              expandIconPosition={'end'}
              size="small"
              items={[
                {
                  key: 'active',
                  label: (
                    <div className={styles.collapseTitle}>
                      액티브<div>{`${activeData.length} 항목`}</div>
                    </div>
                  ),
                  children: (
                    <Table<any>
                      columns={columns}
                      dataSource={activeData}
                      pagination={false}
                      rowKey={(record) => record.name}
                    />
                  ),
                },
              ]}
            />

            {/* 신재생 Collapse */}
            <Collapse
              className={styles.energyDetailCollapse}
              expandIconPosition={'end'}
              size="small"
              items={[
                {
                  key: 'renewable',
                  label: (
                    <div className={styles.collapseTitle}>
                      신재생<div>{`${renewableData.length} 항목`}</div>
                    </div>
                  ),
                  children: (
                    <Table<any>
                      columns={columns}
                      dataSource={renewableData}
                      pagination={false}
                      rowKey={(record) => record.name}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyDetail;
