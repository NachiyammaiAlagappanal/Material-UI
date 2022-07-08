/* eslint-disable no-console */
import { map } from '@laufire/utils/collection';

const consolidatedData = (context) => {
	const { config: { studentMarks, markSheets }} = context;

	const newData = map(markSheets, ({ StudentName, rollNo }) => ({
		StudentName,
		...studentMarks[rollNo],
	}));

	console.log(newData);
	return newData;
};

export default consolidatedData;
