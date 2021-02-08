import React, { useState, createContext, useEffect } from 'react';

export const CountryContext = createContext();

export default function CountryContextProvider(props) {
	const [loading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [countryNames, setCountryNames] = useState([]);

	async function fetchCountries() {
		try {
			const response = await fetch(`https://restcountries.eu/rest/v2/all`);
			const data = await response.json();

			setCountries(data);

			setCountryNames(
				data.map((country) => {
					return {
						name: country.name,
						code: country.alpha3Code,
					};
				}),
			);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		setLoading(true);
		fetchCountries();
	}, []);

	return (
		<CountryContext.Provider
			value={{
				countries,
				loading,
				countryNames,
				setCountries,
				setLoading,
				fetchCountries,
			}}>
			{props.children}
		</CountryContext.Provider>
	);
}
