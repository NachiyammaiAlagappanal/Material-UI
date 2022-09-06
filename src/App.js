import { React } from 'react';
import './App.scss';
// import MarkSheetD from './components/MITable';
import TabContent from './components/TabContent';
import Image from './images/redMark.png';

const App = (context) =>
	<div className="App" role="App">
		{TabContent(context)}
		<a href="https://www.w3schools.com">
			<img src={ Image } width="50" height="50"/></a>
	</div>;

export default App;
