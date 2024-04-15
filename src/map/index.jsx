import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import './style.css';
import { stop } from '../assets';
import L from 'leaflet';
import { forwardRef, useRef, useImperativeHandle } from 'react';

let first = { color: 'blue', weight: 8, opacity: 0.6 };
let second = { color: 'red', weight: 8, opacity: 0.6 };
const CoreMap = forwardRef((props, ref) => {
  const map = useMap();
  useImperativeHandle(ref, () => ({
    fitBounds(bounds) {
      map.fitBounds(bounds);
    },
  }));
  return null;
});
const Map = ({ city, route }) => {
  let location = city.get('location');
  const core = useRef();
  const getPath = () => {
    if (!route || !route.get('path')) return '';
    else {
      let path = route.get('path');
      const half = Math.ceil(path.length / 2);
      core.current.fitBounds(L.polyline(path, { color: 'black' }).getBounds());
      return (
        <>
          <Polyline pathOptions={first} positions={path.slice(0, half + 1)} />
          <Polyline
            pathOptions={second}
            positions={path.slice(half, path.length)}
          />
        </>
      );
    }
  };
  const getStops = () => {
    const icon = L.icon({
      iconUrl: stop,
      iconSize: [40, 45],
      iconAnchor: [20, 45],
      popupAnchor: [0, -32],
    });
    if (!route || !route.get('osisp')) return '';
    else
      return (
        <>
          {route.get('path').map((step) => {
            if (step[2])
              return (
                <Marker position={[step[0], step[1]]} icon={icon}>
                  <Popup>{step[2]}</Popup>
                </Marker>
              );
              else return null
          })}
        </>
      );
  };
  return (
    <MapContainer
      className="map"
      center={[location.latitude, location.longitude]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <CoreMap ref={core} />
      <TileLayer
        attribution="Google"
        url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
      />
      {getPath()}
      {getStops()}
    </MapContainer>
  );
};
export default Map;
