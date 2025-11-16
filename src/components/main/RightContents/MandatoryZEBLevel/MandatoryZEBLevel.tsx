'use client';

import {
  Button,
  Flex,
  Form,
  Input,
  Select,
  Tabs,
  Modal,
  InputNumber,
} from 'antd';
import styles from './MandatoryZEBLevel.module.scss';
import { DingtalkOutlined, SearchOutlined } from '@ant-design/icons';
import { useStore } from '@/store';
import React, { useEffect, useState } from 'react';
import KakaoMaps from '@/components/main/RightContents/MandatoryZEBLevel/KakaoMaps';
import DaumPostcodeEmbed from 'react-daum-postcode';

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

  const [isPostcodeModalOpen, setIsPostcodeModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState('');
  const [modal, contextHolder] = Modal.useModal();
  const [form] = Form.useForm();

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

  const handleAddressSearch = () => {
    setIsPostcodeModalOpen(true);
  };

  const handlePostcodeComplete = (data: any) => {
    const roadAddress = data.roadAddress || data.autoRoadAddress;
    const jibunAddress = data.jibunAddress || data.autoJibunAddress;

    // 주소 데이터를 폼에 설정
    form.setFieldsValue({
      roadName: roadAddress,
      lotNumber: jibunAddress,
    });

    // 지도 위치 업데이트를 위해 주소 상태 설정 (도로명 주소 우선)
    setCurrentAddress(roadAddress || jibunAddress);

    setIsPostcodeModalOpen(false);
  };

  const handlePostcodeClose = () => {
    setIsPostcodeModalOpen(false);
  };

  const handleDirectInput = () => {
    // 주소 필드 초기화
    form.setFieldsValue({
      roadName: '',
      lotNumber: '',
    });

    // 지도를 기본 주소로 초기화
    setCurrentAddress('서울특별시 강서구 공항대로 220');
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    handleRequestAnalysis();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    modal.error({
      title: '입력 오류',
      content: '필수 입력 항목을 모두 입력해주세요.',
      centered: true,
    });
  };
  return (
    <>
      <Form
        name="basic"
        form={form}
        disabled={pageStep === 1}
        initialValues={{
          zebGrade: '4',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={(changedValues, allValues) => {
          // 주소 필드가 변경되었을 때 지도 위치 업데이트
          if (changedValues.roadName) {
            setCurrentAddress(changedValues.roadName);
          } else if (changedValues.lotNumber && !allValues.roadName) {
            setCurrentAddress(changedValues.lotNumber);
          }

          // 건축면적 자동 계산 (연면적 / 지상층수)
          if (changedValues.bld_al_area || changedValues.bld_floor_esurf) {
            const totalArea =
              changedValues.bld_al_area || allValues.bld_al_area;
            const floors =
              changedValues.bld_floor_esurf || allValues.bld_floor_esurf;

            if (totalArea && floors && floors > 0) {
              const buildingArea = Math.round(totalArea / floors);
              form.setFieldsValue({
                bld_area: buildingArea,
              });
            }
          }
        }}
      >
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
            {pageStep === 0 && (
              <div className={styles.mandatoryGradeAddr}>
                <Button size={'middle'} onClick={handleDirectInput}>
                  직접 입력
                </Button>
                <Button
                  size={'middle'}
                  icon={<SearchOutlined />}
                  iconPosition={'end'}
                  onClick={handleAddressSearch}
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
                      { value: '3', label: 'ZEB 3등급' },
                      { value: '4', label: 'ZEB 4등급' },
                      { value: '5', label: 'ZEB 5등급' },
                    ]}
                  />
                </Form.Item>
              </Flex>
            )}

            <Flex gap={40}>
              <div className={styles.mapContainer}>
                {/*<GoogleMaps />*/}
                <KakaoMaps address={currentAddress} />
              </div>
              <div className={styles.addressContainer}>
                <div className={styles.addressSection}>
                  <div className={styles.addressTitle}>주소</div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputLabel}>도로명</div>
                    <Form.Item
                      name="roadName"
                      style={{ flex: 1, margin: 0 }}
                      rules={[{ required: true, message: '' }]}
                      hasFeedback
                    >
                      <Input
                        size={'small'}
                        placeholder="입력하세요."
                        className={styles.addressInput}
                        readOnly
                      />
                    </Form.Item>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputLabel}>지번</div>
                    <Form.Item
                      name="lotNumber"
                      style={{ flex: 1, margin: 0 }}
                      rules={[{ required: true, message: '' }]}
                      hasFeedback
                    >
                      <Input
                        size={'small'}
                        placeholder="입력하세요."
                        className={styles.addressInput}
                        readOnly
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
                        name="bld_main_use"
                        style={{ flex: 1, margin: 0 }}
                        rules={[
                          {
                            validator: (_, value) =>
                              value && value !== '0'
                                ? Promise.resolve()
                                : Promise.reject(''),
                          },
                        ]}
                      >
                        <Select
                          placeholder="선택"
                          className={styles.infoSelect}
                          size="small"
                          options={[
                            { value: '0', label: '선택' },
                            { value: '2', label: '교육시설' },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>구분 2</div>
                      <Form.Item
                        name="bld_detail_use"
                        style={{ flex: 1, margin: 0 }}
                        rules={[
                          {
                            validator: (_, value) =>
                              value && value !== '0'
                                ? Promise.resolve()
                                : Promise.reject(''),
                          },
                        ]}
                      >
                        <Select
                          placeholder="선택"
                          className={styles.infoSelect}
                          size="small"
                          options={[
                            { value: '0', label: '선택' },
                            { value: '1', label: '초중고' },
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
                        name="bld_al_area"
                        style={{ flex: 1, margin: 0 }}
                        rules={[{ required: true, message: '' }]}
                      >
                        <InputNumber className={styles.infoInput} min={1} />
                      </Form.Item>
                      <span className={styles.unitText}>㎡</span>
                    </div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>건축면적</div>
                      <Form.Item
                        name="bld_area"
                        style={{ flex: 1, margin: 0 }}
                        rules={[{ required: true, message: '' }]}
                      >
                        <Input readOnly className={styles.infoInput} />
                      </Form.Item>
                      <span className={styles.unitText}>㎡</span>
                    </div>
                  </div>

                  <div className={styles.buildingInfoSection}>
                    <div className={styles.buildingInfoTitle}>층수</div>
                    <div className={styles.infoRow}>
                      <div className={styles.infoLabel}>지상 층수</div>
                      <Form.Item
                        name="bld_floor_esurf"
                        style={{ flex: 1, margin: 0 }}
                        rules={[{ required: true, message: '' }]}
                      >
                        <InputNumber
                          className={styles.infoInput}
                          min={1}
                          max={999}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </div>
          {pageStep === 1 && (
            <Flex justify={'right'} className={'requestButton'}>
              <Button
                disabled={false}
                type={'primary'}
                icon={<DingtalkOutlined />}
                onClick={handleRequestAnalysis}
              >
                ZEB [의무 등급] 분석 요청
              </Button>
            </Flex>
          )}
          {pageStep === 0 && (
            <Flex justify={'right'} className={'requestButton'}>
              <Button
                htmlType={'submit'}
                type={'primary'}
                icon={<DingtalkOutlined />}
                //onClick={handleRequestAnalysis}
              >
                ZEB [의무 등급] 분석 요청
              </Button>
            </Flex>
          )}
        </div>

        <Modal
          title="주소 검색"
          open={isPostcodeModalOpen}
          onCancel={handlePostcodeClose}
          footer={null}
          width={500}
          destroyOnClose
        >
          <DaumPostcodeEmbed
            onComplete={handlePostcodeComplete}
            onClose={handlePostcodeClose}
            style={{ height: '400px' }}
          />
        </Modal>
      </Form>

      {contextHolder}
    </>
  );
};

export default MandatoryZEBLevel;
