
//import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick}) => {
  return (
    <div className="location-marker" onClick={onClick}>

        <use href="#line-md--map-marker-loop" className="location-icon" />
        
    </div>
  );
}

export default LocationMarker