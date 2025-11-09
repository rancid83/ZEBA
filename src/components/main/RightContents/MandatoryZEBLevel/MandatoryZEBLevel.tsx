import { Button, Flex, Form, Input, InputNumber, Select, Tabs } from 'antd';
import styles from './MandatoryZEBLevel.module.scss';
import { DingtalkOutlined, SearchOutlined } from '@ant-design/icons';
import GoogleMaps from '@/components/main/RightContents/MandatoryZEBLevel/Google.Maps';
import { useStore } from '@/store';
import React from 'react';

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
  } = useStore();

  const handleRequestAnalysis = () => {
    setLoading(true);
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

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Form>
        <div className={styles.mandatoryGradeContainer}>
          <div className={styles.mandatoryGrade}>
            <div className={styles.mandatoryGradeHeader}>
              <img
                src="/assets/images/icon/icon-mark.png"
                alt="icon"
                className={styles.icon}
              />
              <span className={styles.title}>건축물 개요</span>
            </div>
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
            <Flex gap={40}>
              <div className={styles.mapContainer}>
                <GoogleMaps />
              </div>
              <div className={styles.addressContainer}>
                <div className={styles.addressSection}>
                  <div className={styles.addressTitle}>주소</div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputLabel}>도로명</div>
                    <Form.Item name="roadName" style={{ flex: 1, margin: 0 }}>
                      <Input
                        size={'small'}
                        placeholder="인천광역시 서구 이음로 65"
                        className={styles.addressInput}
                      />
                    </Form.Item>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputLabel}>지번</div>
                    <Form.Item name="lotNumber" style={{ flex: 1, margin: 0 }}>
                      <Input
                        size={'small'}
                        placeholder="인천광역시 서구 원당동 1024"
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
                          placeholder="교육시설"
                          className={styles.infoSelect}
                          size="small"
                          options={[
                            { value: 'educational', label: '교육시설' },
                            { value: 'residential', label: '주거시설' },
                            { value: 'commercial', label: '상업시설' },
                            { value: 'office', label: '업무시설' },
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
                          placeholder="초중고"
                          className={styles.infoSelect}
                          size="small"
                          options={[
                            { value: 'elementary', label: '초중고' },
                            { value: 'university', label: '대학교' },
                            { value: 'kindergarten', label: '유치원' },
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
                        <Input
                          placeholder="17,000"
                          className={styles.infoInput}
                          size="small"
                        />
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
                          placeholder="3,400"
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
                        <InputNumber
                          placeholder="5"
                          className={styles.infoInput}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </div>
          <Flex justify={'right'} className={styles.requestButton}>
            <Button
              type={'primary'}
              icon={<DingtalkOutlined />}
              onClick={handleRequestAnalysis}
            >
              ZEB [의무 등급] 분석 요청
            </Button>
          </Flex>
        </div>
      </Form>
    </>
  );
};

export default MandatoryZEBLevel;
