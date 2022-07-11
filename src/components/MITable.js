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
import { Slider } from '@mui/material';
import { Box } from '@mui/system';
import FilterManager from '../services/FilterManager';

const MarkSheetD = (context) => {
	const { state: { range }, patchState } = context;
	const newData = consolidatedData(context);
	const columns = newData.map((d) => keys(d)).flat()
		.filter(unique);
	const handleChange = (Event, value) => patchState({ range: value });

	const filterMark = FilterManager.filterMark({ ...context, data: newData });

	console.log(filterMark);

	return <Box sx={ { width: 200 } }>
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
					<TableRow component="th">
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
					{map(newData, (row, i) => <TableRow key={ i }>{
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
		<Slider
			value={ range }
			onChange={ handleChange }
			color="success"
			size="large"
			valueLabelDisplay="auto"
			min={ 0 }
			max={ 100 }
		/>
	</Box>;
};

export default MarkSheetD;
