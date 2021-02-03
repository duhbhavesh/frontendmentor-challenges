import React from 'react';
import { useLocation } from '../contexts/LocationContext';
import Loader from './Loader';

export default function Card() {
	const { location } = useLocation();

	const details = [
		{
			label: 'IP ADDRESS',
			value: location?.ip,
		},
		{
			label: 'LOCATION',
			value: `${location?.location?.city},${location?.location?.region}${location?.location?.postalCode}`,
		},
		{
			label: 'TIMEZONE',
			value: `UTC ${location?.location?.timezone}`,
		},
		{
			label: 'ISP',
			value: location?.isp,
		},
	];

	return (
		<ul>
			{!location ? (
				<Loader />
			) : (
				details?.map((item) => (
					<li key={item.label}>
						<h3>{item.label}</h3>
						<p>{item.value}</p>
					</li>
				))
			)}
		</ul>
	);
}
