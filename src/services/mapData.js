/* eslint-disable no-console */
import { keys, map, values } from '@laufire/utils/collection';

const mapData = (context) => {
	const { config: { studentMarks, markSheets }} = context;

	const newData = map(markSheets, ({ StudentName, rollNo }) => ({
		studentName: StudentName,
		subjectName: keys(studentMarks[rollNo]),
		marks: values(studentMarks[rollNo]),
	}));

	console.log(newData);
	return newData;
};

export default mapData;
