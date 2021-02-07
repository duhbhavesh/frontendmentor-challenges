import React, { useContext } from 'react';

import { CountryContext } from '../contexts/CountryContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Search from './Search';
import Card from './Card';

export default function Header() {
	const { countries } = useContext(CountryContext);
	const { lightMode } = useContext(ThemeContext);

	return (
		<header className={lightMode ? 'header lightModeBg' : 'header darkMode'}>
			<div className='container'>
				<Search />
				<div className='countries'>
					{countries.length >= 1 &&
						countries.map((country) => (
							<Card key={country.alpha3Code} details={country} />
						))}
				</div>
			</div>
		</header>
	);
}
