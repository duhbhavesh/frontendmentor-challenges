import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export default function CountryButton({ code, name }) {
	const { lightMode } = useContext(ThemeContext);

	return (
		<Link
			className={
				lightMode ? 'details__relation lightMode' : 'details__relation'
			}
			to={`/country/${code}`}>
			{name}
		</Link>
	);
}
