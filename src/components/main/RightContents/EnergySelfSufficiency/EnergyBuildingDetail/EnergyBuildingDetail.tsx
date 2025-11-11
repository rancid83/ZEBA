'use client';

import React, { useEffect, useState } from 'react';
import { Collapse, Flex, Table, TableProps } from 'antd';
import styles from './EnergyBuildingDetail.module.scss';

const EnergyBuildingDetail = () => {
  const [passiveData, setPassiveData] = useState<any[]>([]);
  const [activeData, setActiveData] = useState<any[]>([]);
  const [renewableData, setRenewableData] = useState<any[]>([]);

  useEffect(() => {
    // fetch building-specific JSON files from public/json
    fetch('/assets/json/building-passive.json')
      .then((res) => res.json())
      .then(setPassiveData)
      .catch(() => setPassiveData([]));

    fetch('/assets/json/building-active.json')
      .then((res) => res.json())
      .then(setActiveData)
      .catch(() => setActiveData([]));

    fetch('/assets/json/building-renewable.json')
      .then((res) => res.json())
      .then(setRenewableData)
      .catch(() => setRenewableData([]));
  }, []);

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
    },
    {
      title: '의무 등급',
      dataIndex: 'mandatory',
      key: 'mandatory',
    },
    {
      title: '목표 등급',
      dataIndex: 'target',
      key: 'target',
    },
    {
      title: '성능 조합 등급',
      dataIndex: 'combined',
      key: 'combined',
    },
  ];

  return (
    <>
      <div className={`${styles.mandatoryGradeContainer} `}>
        <div className={styles.mandatoryGrade}>
          <div className={styles.mandatoryGradeHeader}>
            <img
              src="/assets/images/icon/icon-mark.png"
              alt="icon"
              className={styles.icon}
            />
            <span className={styles.title}>건물별 성능 내역</span>
          </div>

          <div className={styles.EnergyDetailTitle}>
            <Flex className={styles.detailDescription}>
              <span>건물 기준의 성능 상세 항목을 표로 보여줍니다.</span>
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

export default EnergyBuildingDetail;
