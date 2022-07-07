import { React } from 'react';
import './App.scss';
import MarkSheetD from './components/MITable';

const App = (context) =>
	<div className="App" role="App">
		{MarkSheetD(context)}
	</div>;

export default App;
