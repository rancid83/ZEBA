'use client';

import { Button, Flex, Form, Input, InputNumber, Select, Tabs } from 'antd';
import styles from './MandatoryZEBLevel.module.scss';
import { DingtalkOutlined, SearchOutlined } from '@ant-design/icons';
import GoogleMaps from '@/components/main/RightContents/MandatoryZEBLevel/Google.Maps';
import { useStore } from '@/store';
import React, { useEffect } from 'react';
import loading from '@/app/[lang]/loading';
import KakaoMaps from '@/components/main/RightContents/MandatoryZEBLevel/KakaoMaps';

const MandatoryZEBLevel = (props: any) => {
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      size="large"
      items={[
        {
          label: `ZEB 의무 등급`,
          key: '1',
          children: <MandatoryGrade />,
          style: { margin: 0 },
        },
      ]}
    />
  );
};

const MandatoryGrade = () => {
  const {
    setLoading,
    updateGradeData,
    updateGradeBuildingData,
    updateGradeDataPercent,
    pageStep,
  } = useStore();

  const handleRequestAnalysis = () => {
    setLoading(true);

    //임시
    if (pageStep === 0) {
      updateGradeData(0, {
        creator: 8.1,
        consume: 185.8,
        grade: 4.2,
        zebGrade: 5,
      });

      updateGradeData(1, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeBuildingData(0, {
        zebGrade: 0,
        grade: 294922,
        renewable: 13543,
        active: 179810,
        passive: 101569,
        increase: 0,
        benefit: 0,
      });

      updateGradeBuildingData(1, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeDataPercent(0, {
        renewable: (13543 / 387938) * 100,
        active: (179810 / 387938) * 100,
        passive: (101569 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(1, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });
    }

    if (pageStep === 1) {
      updateGradeData(0, {
        creator: 8.1,
        consume: 185.8,
        grade: 4.2,
        zebGrade: 5,
      });

      updateGradeData(1, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeData(2, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeBuildingData(0, {
        zebGrade: 0,
        grade: 294922,
        renewable: 13543,
        active: 179810,
        passive: 101569,
        increase: 0,
        benefit: 0,
      });

      updateGradeBuildingData(1, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeBuildingData(2, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeDataPercent(0, {
        renewable: (13543 / 387938) * 100,
        active: (179810 / 387938) * 100,
        passive: (101569 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(1, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(2, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });
    }

    if (pageStep === 2) {
      updateGradeData(0, {
        creator: 8.1,
        consume: 185.8,
        grade: 4.2,
        zebGrade: 5,
      });

      updateGradeData(1, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeData(2, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeData(3, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeBuildingData(0, {
        zebGrade: 0,
        grade: 294922,
        renewable: 13543,
        active: 179810,
        passive: 101569,
        increase: 0,
        benefit: 0,
      });

      updateGradeBuildingData(1, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeBuildingData(2, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeBuildingData(3, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeDataPercent(0, {
        renewable: (13543 / 387938) * 100,
        active: (179810 / 387938) * 100,
        passive: (101569 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(1, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(2, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(3, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  };

  useEffect(() => {}, [pageStep]);
  return (
    <>
      <div className={styles.mandatoryGradeContainer}>
        <Form
          disabled={pageStep === 1}
          initialValues={{
            zebGrade: 'educational', //ZEB
            category1: 'residential', //구분1
            category2: 'residential', //구분2
          }}
        >
          <div className={styles.mandatoryGrade}>
            <div className={styles.mandatoryGradeHeader}>
              <img
                src="/assets/images/icon/icon-mark.png"
                alt="icon"
                className={styles.icon}
              />
              <span className={styles.title}>건축물 개요</span>
            </div>
            {pageStep === 0 && (
              <div className={styles.mandatoryGradeAddr}>
                <Button size={'middle'}>직접 입력</Button>
                <Button
                  size={'middle'}
                  icon={<SearchOutlined />}
                  iconPosition={'end'}
                >
                  주소 검색
                </Button>
              </div>
            )}

            {pageStep === 1 && (
              <Flex justify={'right'} align={'center'} gap={15}>
                <span className={styles.zebGradeInputLabel}>
                  ZEB 목표 등급 입력
                </span>
                <Form.Item
                  name="zebGrade"
                  style={{
                    marginBottom: '0',
                  }}
                >
                  <Select
                    disabled={false}
                    style={{
                      width: '120px',
                    }}
                    options={[
                      { value: 'educational', label: 'ZEB 5등급' },
                      { value: 'residential', label: 'ZEB 4등급' },
                      { value: 'commercial', label: 'ZEB 3등급' },
                      { value: 'office', label: 'ZEB 2등급' },
                      { value: 'office2', label: 'ZEB 1등급' },
                    ]}
                  />
                </Form.Item>
              </Flex>
            )}

            <Flex gap={40}>
              <div className={styles.mapContainer}>
                <GoogleMaps />
                {/*<KakaoMaps />*/}
              </div>
              <div className={styles.addressContainer}>
                <div className={styles.addressSection}>
                  <div className={styles.addressTitle}>주소</div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputLabel}>도로명</div>
                    <Form.Item name="roadName" style={{ flex: 1, margin: 0 }}>
                      <Input
                        size={'small'}
                        placeholder="입력하세요."
                        className={styles.addressInput}
                      />
                    </Form.Item>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputLabel}>지번</div>
                    <Form.Item name="lotNumber" style={{ flex: 1, margin: 0 }}>
                      <Input
                        size={'small'}
                        placeholder="입력하세요."
                        className={styles.addressInput}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className={styles.buildingInfoContainer}>
                  <div className={styles.buildingInfoSection}>
                    <div className={styles.buildingInfoTitle}>용도</div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>구분 1</div>
                      <Form.Item
                        name="category1"
                        style={{ flex: 1, margin: 0 }}
                      >
                        <Select
                          placeholder="선택"
                          className={styles.infoSelect}
                          size="small"
                          options={[
                            { value: 'residential', label: '선택' },
                            { value: 'educational', label: '교육시설' },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>구분 2</div>
                      <Form.Item
                        name="category2"
                        style={{ flex: 1, margin: 0 }}
                      >
                        <Select
                          placeholder="선택"
                          className={styles.infoSelect}
                          size="small"
                          options={[
                            { value: 'residential', label: '선택' },
                            { value: 'educational', label: '초중고' },
                          ]}
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <div className={styles.buildingInfoSection}>
                    <div className={styles.buildingInfoTitle}>면적</div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>연면적</div>
                      <Form.Item
                        name="totalArea"
                        style={{ flex: 1, margin: 0 }}
                      >
                        <Input className={styles.infoInput} size="small" />
                      </Form.Item>
                      <span className={styles.unitText}>㎡</span>
                    </div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>건축면적</div>
                      <Form.Item
                        name="buildingArea"
                        style={{ flex: 1, margin: 0 }}
                      >
                        <Input
                          disabled
                          className={styles.infoInput}
                          size="small"
                        />
                      </Form.Item>
                      <span className={styles.unitText}>㎡</span>
                    </div>
                  </div>

                  <div className={styles.buildingInfoSection}>
                    <div className={styles.buildingInfoTitle}>층수</div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>지상 층수</div>
                      <Form.Item
                        name="aboveGroundFloors"
                        style={{ flex: 1, margin: 0 }}
                      >
                        <InputNumber className={styles.infoInput} />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </div>
        </Form>
        <Flex justify={'right'} className={'requestButton'}>
          <Button
            type={'primary'}
            icon={<DingtalkOutlined />}
            onClick={handleRequestAnalysis}
          >
            ZEB [의무 등급] 분석 요청
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default MandatoryZEBLevel;
