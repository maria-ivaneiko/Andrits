import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 49.8102707,
  lng: 23.9808189
};

const SectionContacts = () => {
  return (
    <div className="section section-contacts">
      <LoadScript googleMapsApiKey={'AIzaSyDq_YmMKN34D2TNbUxdDLngLQoiEcoCU9Q'}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={{
            lat: 49.8102707,
            lng: 23.9808189
          }} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default SectionContacts;
