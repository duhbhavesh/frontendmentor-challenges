import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';

import icons from '../img/icons.svg';

import ResultCard from './ResultCard';
import { CountryContext } from '../contexts/CountryContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default withRouter(function ResultDisplay({ match, location }) {
	const { loading, setLoading } = useContext(CountryContext);
	const { lightMode } = useContext(ThemeContext);

	const code = match.params.id;
	const [countryCode, setCountryCode] = useState(code);
	const [country, setCountry] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const updatedCode = location.pathname.slice(9);
		setCountryCode(updatedCode);
		setLoading(true);
		async function getCountry() {
			try {
				const response = await fetch(
					`https://restcountries.eu/rest/v2/alpha/${countryCode}`,
				);
				const data = await response.json();
				setCountry(data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			} finally {
			}
		}

		getCountry();
	}, [location, match.params.id, countryCode, setLoading]);

	return (
		<div className={lightMode ? 'result lightModeBg' : 'result'}>
			<div className='container'>
				<button
					className={lightMode ? 'back lightMode' : 'back'}
					onClick={(e) => history.push('/')}>
					<svg className='icon'>
						<use href={`${icons}#icon-arrow-left`}></use>
					</svg>
					Back
				</button>

				<ResultCard country={country} key={code} />
			</div>
		</div>
	);
});
