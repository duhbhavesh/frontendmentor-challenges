import React, { useContext } from 'react';
import { CountryContext } from '../contexts/CountryContext';

export default function Loader() {
	const { loading } = useContext(CountryContext);

	return (
		<div
			className='loader'
			style={{ display: loading ? 'grid' : 'none' }}></div>
	);
}
