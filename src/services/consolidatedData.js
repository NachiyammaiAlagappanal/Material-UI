/* eslint-disable no-console */
import { map } from '@laufire/utils/collection';

const consolidatedData = (context) => {
	const { config: { studentMarks, markSheets }} = context;

	const data = map(markSheets, ({ student, rollNo }) => ({
		name: student,
		marks: studentMarks[rollNo],
	}));
	const newData = map(markSheets, ({ student, rollNo }) => ({
		student,
		...studentMarks[rollNo],
	}));

	console.log(newData);
	return { data, newData };
};

export default consolidatedData;
