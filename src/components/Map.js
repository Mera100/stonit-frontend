import { useState } from "react";
import GoogleMapReact from "google-map-react";
import StoneMarker from "./StoneMarker";
import InfoLocationBox from "./LocationInfoBox";

const Map = ({ stonesData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const closeInfoBox = () => {
    setLocationInfo(null);
  }

  const stones = stonesData.map((sd) => {
    return (
      <StoneMarker
        lat={sd.lat}
        lng={sd.lng}
        onClick={() => {
          setLocationInfo({
            id: sd.id,
            title: sd.title,
            content: sd.content,
          });
        }}
      />
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCHuzjt0gBQyYtqoDy3Nfhz764La4Y_cHg" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {stones}
      </GoogleMapReact>
      {locationInfo && <InfoLocationBox onCloseClick={closeInfoBox} info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 32.703651,
    lng: 35.293179,
  },
  zoom: 6,
};

export default Map;
