import React, { createContext, useState, useEffect } from 'react';
import GEOLOCATION from '../api/geoApi';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
	const [location, setLocation] = useState(null);

	useEffect(() => {
		GEOLOCATION.get('v1')
			.then((res) => {
				setLocation(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<LocationContext.Provider value={{ location, setLocation }}>
			{children}
		</LocationContext.Provider>
	);
};

const useLocation = () => React.useContext(LocationContext);

export { LocationProvider, useLocation };
