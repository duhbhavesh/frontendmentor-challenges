import React, { useContext } from 'react';

import icons from '../images/icons.svg';
import { CountryContext } from '../contexts/CountryContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Search() {
	const { setCountries, fetchCountries } = useContext(CountryContext);
	const { lightMode } = useContext(ThemeContext);

	const getCountryPerRegion = async (region) => {
		if (region === 'all') {
			fetchCountries();
		} else {
			const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}
            `);
			const data = await response.json();

			setCountries(data);
		}
	};

	const handleSearch = async (e) => {
		const query = e.target.value;

		if (query !== '') {
			try {
				const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}
                `);
				const data = await response.json();

				setCountries(data);
			} catch (err) {
				console.log(err.status);
				alert('No result');
			}
		} else {
			fetchCountries();
		}
	};

	return (
		<div className='search'>
			<div className={lightMode ? 'search__field lightMode' : 'search__field'}>
				<label htmlFor='name' className='search__icon'>
					<svg className='icon'>
						<use href={icons + '#icon-search'}></use>
					</svg>
				</label>
				<input
					type='text'
					className={lightMode ? 'search__input lightMode' : 'search__input'}
					id='name'
					placeholder='Search for a country...'
					onChange={handleSearch}
				/>
			</div>
			<div className='search__type'>
				<select
					className={lightMode ? 'search__region lightMode' : 'search__region'}
					onChange={(e) => getCountryPerRegion(e.target.value)}>
					<option value='all' defaultValue>
						Filter by Region
					</option>
					<option value='africa'>Africa</option>
					<option value='americas'>America</option>
					<option value='asia'>Asia</option>
					<option value='europe'>Europe</option>
					<option value='oceania'>Oceania</option>
				</select>
				<svg className='icon down'>
					<use href={`${icons}#icon-down`}></use>
				</svg>
			</div>
		</div>
	);
}
