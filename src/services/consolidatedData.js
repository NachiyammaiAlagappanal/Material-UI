import { map } from '@laufire/utils/collection';

const consolidatedData = (context) => {
	const { config: { studentMarks, markSheets }} = context;

	const data = map(markSheets, ({ student, rollNo }) => ({
		student,
		...studentMarks[rollNo],
	}));

	return data;
};

export default consolidatedData;
