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
import { map, pick } from '@laufire/utils/collection';

const MarkSheetD = (context) => {
	const { config: { studentMarks, markSheets }} = context;
	const subjects = values(values(studentMarks));

	const item = map(subjects, (subject) => keys(subject)).flat();
	const uniqueSubject = [...new Set(item)];
	const names = pick(markSheets, 'student');
	const marks = values(map(studentMarks, (mark) => mark));
	const mark = marks.map((ele) => values(ele));
	const inter = mark.map((i) => i);

	console.log(mark, inter);

	return (
		<TableContainer component={ Paper }>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell component="th">Students Name</TableCell>
						{map(uniqueSubject, (sub) =>
							<TableCell key={ sub } component="th"align="right">
								{ sub }</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{map(names, (name) =>
						<TableRow key={ name }>
							<TableCell
								align="center"
							>{ name } </TableCell>
							{map(inter, (i) => <TableCell align="center">
								{ i } </TableCell>)}
						</TableRow>)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MarkSheetD;
