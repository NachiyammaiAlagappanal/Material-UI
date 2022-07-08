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

const MarkSheetD = (context) => {
	const { data, newData } = consolidatedData(context);
	const columns = data.map((d) => keys(d.marks)).flat()
		.filter(unique);

	return (
		<TableContainer component={ Paper }>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							component="th"
							align="center"
						>STUDENTS NAME</TableCell>
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
							>{ ele } </TableCell>)
					}
					</TableRow>)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MarkSheetD;
