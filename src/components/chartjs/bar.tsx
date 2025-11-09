'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = [
  '지자체 에너지 절약 법규 기준',
  '[STEP-1] 의무 등급',
  '[STEP-2] 목표 등급',
  '[STEP-3] 성능 조합 등급',
];

export function BarChart(props: any) {
  const [data, setData] = useState<any>({
    labels,
    datasets: [],
  });
  const [changeOptions, setChangeOptions] = useState<any>({
    plugins: {},
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        max: 600, // y축 최대값 설정
      },
    },
  });
  const { isEnergyTap, gradeData } = props;
  const isEnergyTapConsume = (type: string) => {
    if (gradeData) {
      return gradeData.map((item: any) => {
        return item[type];
      });
    }

    return [0, 0, 0, 0];
  };

  useEffect(() => {
    setChangeOptions({
      ...changeOptions,
      scales: {
        ...changeOptions.scales,
        y: {
          ...changeOptions.scales.y,
          max: isEnergyTap ? 600 : 1600000, // y축 최대값 설정
        },
      },
    });
    console.log(changeOptions);
    setData({
      labels,
      datasets: isEnergyTap
        ? [
            {
              label: '1차 에너지 생산량',
              data: labels.map((item, idx) => {
                return isEnergyTapConsume('consume')[idx];
              }),
              backgroundColor: 'rgba(29, 181, 190, 0.79)',
            },
            {
              label: '1차 에너지 소비량',
              data: labels.map((item, idx) => {
                return isEnergyTapConsume('creator')[idx];
              }),
              backgroundColor: 'rgba(213, 250, 252, 0.79)',
            },
          ]
        : [
            {
              label: '패시브',
              data: labels.map((item, idx) => {
                return isEnergyTapConsume('passive')[idx];
              }),
              backgroundColor: 'rgba(29, 181, 190, 0.79)',
            },
            {
              label: '액티브',
              data: labels.map((item, idx) => {
                return isEnergyTapConsume('active')[idx];
              }),
              backgroundColor: 'rgba(117, 227, 234, 0.79)',
            },
            {
              label: '신재생',
              data: labels.map((item, idx) => {
                return isEnergyTapConsume('renewable')[idx];
              }),
              backgroundColor: 'rgba(213, 250, 252, 0.79)',
            },
          ],
    });
  }, [isEnergyTap, gradeData]);

  return <Bar options={changeOptions} data={data} />;
}
