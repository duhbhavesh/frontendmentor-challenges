import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ThemeProvider from './contexts/ThemeContext';
import CountryProvider from './contexts/CountryContext';
import Nav from './components/Nav';
import Header from './components/Header';
import ResultDisplay from './components/ResultDisplay';
import './css/main.scss';

export default function App() {
	return (
		<ThemeProvider>
			<CountryProvider>
				<Router>
					<Nav />
					<Switch>
						<Route exact path='/' component={Header} />
						<Route path='/country/:id' component={ResultDisplay} />
					</Switch>
				</Router>
			</CountryProvider>
		</ThemeProvider>
	);
}
