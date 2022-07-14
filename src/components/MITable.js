/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { keys, values } from '@laufire/utils/lib';
import { map } from '@laufire/utils/collection';
import consolidatedData from '../services/consolidatedData';
import { unique } from '@laufire/utils/predicates';
import { Grid, Slider, Typography } from '@mui/material';
import FilterManager from '../services/FilterManager';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Poll, TableView } from '@mui/icons-material';

const sliders = (context) => {
	const { state: { range }, data: subject } = context;

	return (
		<Slider
			getAriaLabel={ () => 'Mark range' }
			value={ range[subject] }
			onChange={ (evt) => context.actions
				.changingRange({ [subject]: evt.target.value }) }
			color="secondary"
			size="large"
			valueLabelDisplay="auto"
			min={ 0 }
			max={ 100 }
		/>);
};

const sliderFunction = (context) => {
	const { config: { subjects }} = context;

	return (
		map(subjects, (subject) =>
			<Grid
				key={ subject }
				container={ true }
				justifyContent="center"
			>
				<Grid item={ true }>
					<Typography>
						{subject}
					</Typography>
				</Grid>
				<Grid
					item={ true }
					xs={ 2 }
				>{sliders({ ...context, data: subject })}</Grid>
			</Grid>));
};

const TableHeader = (columns) =>
	<TableRow>
		{map(columns, (sub) =>
			<TableCell
				key={ sub }
				component="th"
				align="center"
			>
				{sub}</TableCell>)}
	</TableRow>;

const TableContent = (filterMark) =>
	map(filterMark, (row, i) => <TableRow key={ i }>{
		map(values(row), (ele, j) =>
			<TableCell
				key={ j }
				align="center"
			>{ele} </TableCell>)
	}
	</TableRow>);
const table = (context) => {
	const newData = consolidatedData(context);
	const columns = newData.map((d) => keys(d)).flat()
		.filter(unique);
	const filterMark = FilterManager.filterMark({ ...context, data: newData });

	return <Table>
		<TableHead>{TableHeader(columns)}</TableHead>
		<TableBody>{TableContent(filterMark)}</TableBody>
	</Table>;
};
const TableContain = (context) =>
	<TableContainer
		sx={ {
			'width': 650,
			'backgroundColor': 'lightBlue',
			'& :hover': {
				backgroundColor: 'yellow',
			},
		} }
		component={ Paper }
	>{table(context)}
	</TableContainer>;

const Toggle = (context) => {
	const { state: { alignment }, state } = context;

	console.log(state);

	return (
		<ToggleButtonGroup
			color="primary"
			value={ alignment }
			exclusive={ true }
		>
			<ToggleButton
				value="Table"
				fontSize="large"
				onClick={ () => context.actions.Toggle('Table') }
			>
				<TableView/></ToggleButton>
			<ToggleButton
				value="Plot"
				fontSize="large"
				onClick={ () => context.actions.Toggle('Plot') }
			><Poll/></ToggleButton>
		</ToggleButtonGroup>);
};

const checkToggle = (context) => {
	const { state: { alignment }} = context;

	return alignment === 'Table' ? TableContain(context) : 0;
};

const MarkSheetD = (context) =>
	<Grid
		container={ true }
		justifyContent="center"
		paddingTop={ 5 }
	>
		{Toggle(context)}
		{sliderFunction(context)}
		{checkToggle(context)}
	</Grid>;

export default MarkSheetD;
