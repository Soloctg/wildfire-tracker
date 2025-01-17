/**
 * Created by USER on 1/14/2025.
 */

import GoogleMapReact from 'google-map-react';

import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';
import { useState } from 'react';

const Map = ({ eventData, center, zoom }) => {

	const[LocInfo , setLocInfo] = useState(null);
	const markers = eventData.map(ev => {
		if(ev.categories[0].id === 8){
			return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
			                       onClick={() => setLocInfo({ id: ev.id , title: ev.title})}
			/>
		}
		return null;
	})

	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{key :
                'AIzaSyDWTJCJEle8NjFGOIJXXNqVPGTMutSRXw0'}}
				defaultCenter = { center }
				defaultZoom = { zoom }
			>
				{markers}

				<use href="#line-md--map-marker-loop" lat={center.lat} lng={center.lng} />
				

			</GoogleMapReact>
			{LocInfo && <LocationInfo info = {LocInfo} />}

		</div>
	);
}

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8765
	},
	zoom: 6
}

export default Map