import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Bus } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 5.3600,  // Abidjan coordinates
  lng: -4.0083
};

const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }]
  }
];

interface Bus {
  id: string;
  position: google.maps.LatLngLiteral;
  line: string;
}

const mockBuses: Bus[] = [
  { id: '1', position: { lat: 5.3600, lng: -4.0083 }, line: 'L1' },
  { id: '2', position: { lat: 5.3650, lng: -4.0153 }, line: 'L2' },
  { id: '3', position: { lat: 5.3550, lng: -4.0013 }, line: 'L3' },
];

export function BusMap() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(13);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  if (!isLoaded) return (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  );

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: isDarkMode ? darkMapStyle : undefined,
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {mockBuses.map((bus) => (
        <Marker
          key={bus.id}
          position={bus.position}
          icon={{
            path: Bus({}).type,
            fillColor: '#f97316',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#fff',
            scale: 1.5,
          }}
          label={{
            text: bus.line,
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        />
      ))}
    </GoogleMap>
  );
}