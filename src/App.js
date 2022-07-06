import { React } from 'react';
import './App.scss';
import AddButton from './components/button';

const App = () =>
	<div className="App" role="App">
		{AddButton()}
	</div>;

export default App;
