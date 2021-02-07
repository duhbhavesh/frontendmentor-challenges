import React, { useContext } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import CountryButton from './CountryButton';

export default function ResultCard({ country }) {
	const { countryNames } = useContext(CountryContext);

	const borderCountries =
		country && country.borders.length !== 0 ? (
			country.borders.map((countryCode) => {
				let name, code;
				countryNames.forEach((countryItem) => {
					if (countryItem.code === countryCode) {
						name = countryItem.name;
						code = countryCode;
					}
				});
				return <CountryButton code={code} name={name} key={code} />;
			})
		) : (
			<span>No Border Countries</span>
		);

	return country(
		<div className='details'>
			<div className='details__cover'>
				<img
					src={country.flag}
					alt={country.name + ' flag'}
					className='details__img'
				/>
			</div>

			<div className='details__text'>
				<h3 className='details__name'>{country.name}</h3>
				<div className='details__info'>
					<p className='details__native'>Native Name:{country.nativeName}</p>
					<p className='details__population'>
						Population:{Number(country.population).toLocaleString()}
					</p>
					<p className='details__region'>Region:{country.region}</p>
					<p className='details__subregion'>Sub Region: {country.subregion}</p>
					<p className='details__capital'>Capital: {country.capital} </p>
					<div className='space'></div>
					<p className='details__domain'>
						Top Level Domain: {country.topLevelDomain}
					</p>
					<p className='details__currency'>
						Currencies:
						{country.currencies.map((item) => `${item.name} (${item.symbol})`)}
					</p>
					<p className='details__language'>
						Languages:
						{country.languages.map((item) => item.name).join(',')}
					</p>
				</div>
				<div className='space'></div>

				<div className='details__related'>
					<span>Border Countries:</span>
					{borderCountries}
				</div>
			</div>
		</div>,
	);
}
