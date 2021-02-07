import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ThemeProvider from './contexts/ThemeContext';
import CountryProvider from './contexts/CountryContext';
import Nav from './components/Nav';
import Header from './components/Header';
import ResultCardDisplay from './components/ResultCardDisplay';

export default function App() {
	return (
		<ThemeProvider>
			<CountryProvider>
				<Router>
					<Nav />
					<Switch>
						<Route exact path='/' component={Header}>
							<Route path='/country/:id' component={ResultCardDisplay} />
						</Route>
					</Switch>
				</Router>
			</CountryProvider>
		</ThemeProvider>
	);
}
