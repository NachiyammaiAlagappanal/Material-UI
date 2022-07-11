/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import * as React from 'react';
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

const MarkSheetD = (context) => {
	const newData = consolidatedData(context);
	const columns = newData.map((d) => keys(d)).flat()
		.filter(unique);

	return (
		<Box sx={ { width: 200 } }>
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
				size="large"
				valueLabelDisplay="auto"
				step={ 10 }
				marks={ true }
				min={ 0 }
				max={ 100 }
			/>
		</Box>
	);
};

export default MarkSheetD;
