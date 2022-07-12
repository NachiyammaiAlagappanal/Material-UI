import { React } from 'react';
import './App.scss';
// import MarkSheetD from './components/MITable';
import TabContent from './components/TabContent';

const App = (context) =>
	<div className="App" role="App">
		{TabContent(context)}
	</div>;

export default App;
