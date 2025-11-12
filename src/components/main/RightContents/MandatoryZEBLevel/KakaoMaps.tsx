'use client';

import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const KakaoMaps = () => {
  const [loading, error] = useKakaoLoader({
    appkey: '2c39c0f6475385231e05a98c8870a877', // 발급 받은 APPKEY
    libraries: ['services', 'clusterer'],
  });

  // 로딩/에러 상태 처리
  if (loading) return <div>지도 로딩중...</div>;
  if (error) {
    console.log('error', error);
    return <div>지도 로드 실패</div>;
  }

  return (
    <Map
      center={{ lat: 37.566826, lng: 126.9786567 }}
      style={{ width: '100%', height: '400px' }}
      level={3}
    />
  );
};

export default KakaoMaps;
