import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
	const [lightMode, setLightMode] = useState(false);

	return (
		<ThemeContext.Provider value={{ lightMode, setLightMode }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
