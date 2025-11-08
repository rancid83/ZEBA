'use client';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMaps = (props: any) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        scrollwheel: false,
      }}
      center={{ lat: 47.646935, lng: -122.303763 }}
    />
  );
};

export default GoogleMaps;