/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */
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
import { Box } from '@mui/system';
import FilterManager from '../services/FilterManager';

const MarkSheetD = (context) => {
	const { state: { range }, config: { subjects }} = context;
	const newData = consolidatedData(context);
	const columns = newData.map((d) => keys(d)).flat()
		.filter(unique);

	console.log(context);

	const filterMark = FilterManager.filterMark({ ...context, data: newData });

	console.log(filterMark);

	return <Box sx={ {
		my: 5,
		mx: 55,
		p: 5,
		width: 200,
	} }
	       >
		<TableContainer
			sx={ {
				'width': 650,
				'backgroundColor': 'lightBlue',
				'& :hover': {
					backgroundColor: 'yellow',
				},
			} }
			component={ Paper }
		>
			<Table>
				<TableHead>
					<TableRow>
						{map(columns, (sub) =>
							<TableCell
								key={ sub }
								component="th"
								align="center"
							>
								{sub}</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{map(filterMark, (row, i) => <TableRow key={ i }>{
						map(values(row), (ele, j) =>
							<TableCell
								key={ j }
								align="center"
							>{ele} </TableCell>)
					}
					</TableRow>)}
				</TableBody>
			</Table>
		</TableContainer>
		{map(subjects, (subject) => <Grid
			key={ subject }
			container={ true }
			spacing={ 2 }
		                            >
			<Grid item={ true }>
				<Typography>
					{ subject }
				</Typography>
			</Grid>
			<Grid item={ true } xs={ true }>
				<Slider
					getAriaLabel={ () => 'Mark range' }
					value={ range[subject] }
					onChange={ (evt) => context.actions
						.changingRange({ [subject]: evt.target.value }) }
					color="success"
					size="large"
					valueLabelDisplay="auto"
					min={ 0 }
					max={ 100 }
				/>
			</Grid>
		</Grid>)}
	</Box>;
};

export default MarkSheetD;
