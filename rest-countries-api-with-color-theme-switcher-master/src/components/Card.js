import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../contexts/ThemeContext';

export default function Card({ details }) {
	const { lightMode } = useContext(ThemeContext);

	return (
		<Link
			className={lightMode ? 'card lightMode' : 'card'}
			to={`/country/${details.alpha3Code}`}>
			<div className='card__cover'>
				<img src={details.img} alt={details.name}></img>
			</div>
			<div className='card__text'>
				<h3 className='card__name'>{details.name}</h3>
				<p className='card__population'>
					Population:{' '}
					<span className='population-count'>
						{Number(details.population).toLocaleString()}
					</span>
				</p>
				<p className='card__region'>
					Region: <span className='region-name'>{details.region}</span>
				</p>
				<p className='card__capital'>
					Capital: <span className='capital-name'>{details.capital}</span>
				</p>
			</div>
		</Link>
	);
}
