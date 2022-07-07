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

const MarkSheetD = (context) => {
	const { config: { studentMarks }} = context;
	const subjects = values(values(studentMarks));

	const item = map(subjects, (subject) => keys(subject)).flat();
	const uniqueSubject = [...new Set(item)];
	const data = consolidatedData(context);

	return (
		<TableContainer component={ Paper }>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							component="th"
							align="center"
						>STUDENTS NAME</TableCell>
						{map(uniqueSubject, (sub) =>
							<TableCell key={ sub } component="th"align="center">
								{ sub }</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((ele) =>
						<TableRow
							key={ ele.student }
						>
							<TableCell align="center">{ele.student}</TableCell>
							<TableCell align="center">{ele.TAMIL}</TableCell>
							<TableCell align="center">{ele.ENGLISH}</TableCell>
							<TableCell align="center">{ele.SCIENCE}</TableCell>
							<TableCell align="center">{ele.MATHS}</TableCell>
							<TableCell align="center">{ele.SOCIAL}</TableCell>

						</TableRow>)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MarkSheetD;
