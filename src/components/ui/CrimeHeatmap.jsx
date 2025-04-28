import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CrimeHeatmap = ({ crimes = [], center = [34.0522, -118.2437], zoom = 13 }) => {
  const getMarkerIcon = (crime) => {
    const className = `crime-marker crime-marker-${crime.type.toLowerCase()}`;
    
    return divIcon({
      className: className,
      iconSize: [12, 12],
      iconAnchor: [6, 6],
      popupAnchor: [0, -6]
    });
  };

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {crimes.map((crime, index) => (
          <Marker 
            key={index} 
            position={[crime.lat, crime.lng]}
            icon={getMarkerIcon(crime)}
          >
            <Popup>
              <div className="text-dark-800">
                <h3 className="font-semibold">{crime.type}</h3>
                <p className="text-sm">{crime.description}</p>
                <p className="text-xs mt-1 text-gray-600">{crime.date}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CrimeHeatmap;