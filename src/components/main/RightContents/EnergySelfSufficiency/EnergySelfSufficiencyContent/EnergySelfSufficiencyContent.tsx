import React, { useState } from 'react';
import { Flex, Form, Radio } from 'antd';
import styles from './EnergySelfSufficiencyContent.module.scss';
import { GradeDataPercent } from './data/GradeDataPercent';
import { GradeData } from './data/GradeData';
import { GradeBuildingData } from './data/GradeBuildingData';

const EnergySelfSufficiencyContent = (props: any) => {
  const [size, setSize] = useState('won'); // default is 'middle'
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { tap } = props;
  const isEnergyTap = tap === 1;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const onPieEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Form>
        <div className={`${styles.mandatoryGradeContainer} `}>
          <div className={styles.mandatoryGrade}>
            <div className={styles.mandatoryGradeHeader}>
              <img
                src='/assets/images/icon/icon-mark.png'
                alt='icon'
                className={styles.icon}
              />
              <span className={styles.title}>
                {isEnergyTap ? '에너지 생산량 및 소요량' : '시공 비용 산출'}
              </span>
              {!isEnergyTap && (
                <div>
                  <Radio.Group
                    size={'small'}
                    style={{ marginLeft: '50px' }}
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <Radio.Button value='won'>금액[만원]</Radio.Button>
                    <Radio.Button value='percent'>구성비[%]</Radio.Button>
                  </Radio.Group>
                </div>
              )}
            </div>
            <div className={styles.chartContainer}>
              {isEnergyTap ? (
                <div>막대</div>
              ) : size === 'won' ? (
                <div>원그래프</div>
              ) : (
                <Flex justify={'center'} gap={10}>
                  {GradeDataPercent.map((item) => {
                    return (
                      <div className={styles.gradePie}>
                        <div
                          className={styles.gradeLabel}
                          style={{ marginTop: '21px' }}
                        >
                          {item.label}
                        </div>
                        <div className={styles.gradeFlex}>
                          원그래프
                        </div>
                        <Flex
                          className={styles.gradeFlexText}
                          justify={'space-between'}
                          align={'center'}
                        >
                          <span>합계 : </span>
                          <span>
                            {item.totalMoney}
                            <span>만원</span>
                          </span>
                        </Flex>
                      </div>
                    );
                  })}
                </Flex>
              )}
            </div>
            <Flex
              gap={36}
              justify={'center'}
              align={'center'}
              className={styles.gradeWrap}
            >
              {isEnergyTap
                ? GradeData.map((item, index) => (
                    <div className={styles.gradeBox} key={index}>
                      <div className={styles.gradeLabel}>{item.label}</div>
                      <div className={styles.gradeValue}>
                        <span className={styles.gradeText}>{item.grade}</span>
                        <Flex
                          className={styles.zebGradeText}
                          justify={'space-between'}
                        >
                          <span className={styles.zebGrade}>ZEB 등급</span>
                          {''}
                          <span className={styles.zebGradeNum}>
                            {item.zebGrade} 등급
                          </span>
                        </Flex>
                        <div
                          className={styles.creatorText}
                          style={{ marginTop: '35px' }}
                        >
                          <Flex justify={'left'}>1차 에너지 생산량</Flex>
                          <Flex justify={'right'} align={'flex-end'} gap={5}>
                            <span>{item.creator}</span> kWh/㎡
                          </Flex>
                        </div>
                        <div className={styles.creatorText}>
                          <Flex justify={'left'}>1차 에너지 소요량</Flex>
                          <Flex justify={'right'} align={'flex-end'} gap={5}>
                            <span>{item.consume}</span> kWh/㎡
                          </Flex>
                        </div>
                      </div>
                    </div>
                  ))
                : GradeBuildingData.map((item, index) => (
                    <div className={styles.gradeBox} key={index}>
                      <div className={styles.gradeLabel}>{item.label}</div>
                      <div className={styles.gradeValue}>
                        <Flex align={'center'} justify={'center'}>
                          <span className={styles.gradeText}>{item.grade}</span>
                          <span
                            className={styles.won}
                            style={{ marginTop: '9px' }}
                          >
                            만원
                          </span>
                        </Flex>
                        <Flex
                          className={styles.zebGradeText}
                          justify={'space-between'}
                        >
                          <span className={styles.zebGrade}>ZEB 등급</span>
                          {''}
                          <span className={styles.zebGradeNum}>
                            {item.zebGrade} 등급
                          </span>
                        </Flex>
                        <Flex
                          justify={'space-between'}
                          className={styles.zebGradeTextSub}
                        >
                          <span>신재생 : </span>
                          <span>{item.renewable}</span>
                          <span className={styles.won}>만원</span>
                        </Flex>
                        <Flex
                          justify={'space-between'}
                          className={styles.zebGradeTextSub}
                        >
                          <span>액티브 : </span>
                          <span>{item.active}</span>
                          <span className={styles.won}>만원</span>
                        </Flex>
                        <Flex
                          justify={'space-between'}
                          className={styles.zebGradeTextSub}
                        >
                          <span>패시브 : </span>
                          <span>{item.passive}</span>
                          <span className={styles.won}>만원</span>
                        </Flex>
                        <Flex
                          justify={'space-between'}
                          className={styles.zebGradeTextSub}
                        >
                          <span>증액 : </span>
                          <span>{item.increase}</span>
                          <span className={styles.won}>만원</span>
                        </Flex>
                        <Flex
                          justify={'space-between'}
                          className={styles.zebGradeTextSub}
                        >
                          <span>혜택 : </span>
                          <span>{item.benefit}</span>
                          <span className={styles.won}>만원</span>
                        </Flex>
                      </div>
                    </div>
                  ))}
            </Flex>
          </div>
        </div>
      </Form>
    </>
  );
};
export default EnergySelfSufficiencyContent;
