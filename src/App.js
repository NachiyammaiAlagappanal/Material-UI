import { React } from 'react';
import './App.scss';
import HeatMap from './components/heatMap';
import MarkSheetD from './components/MITable';
import mapData from './services/mapData';

const mapDatum = (context) => ({
	values: mapData(context),
});

const App = (context) =>

	<div className="App" role="App">
		{MarkSheetD(context)}
		<div><HeatMap{ ...context } data={ mapDatum(context) }/></div>
	</div>;

export default App;
