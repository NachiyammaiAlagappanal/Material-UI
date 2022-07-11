const config = {
	markSheets: [
		{
			StudentName: 'Sriram',
			rollNo: 11,
		},
		{
			StudentName: 'Ram',
			rollNo: 16,
		},
		{
			StudentName: 'sri',
			rollNo: 18,
		},
		{
			StudentName: 'mani',
			rollNo: 20,
		},
	],
	studentMarks: {
		11: {
			TAMIL: 80,
			ENGLISH: 90,
			SCIENCE: 86,
		},
		16: {
			TAMIL: 60,
			ENGLISH: 97,
			SCIENCE: 100,
		},
		18: {
			TAMIL: 60,
			ENGLISH: 90,
			SCIENCE: 66,
		},
		20: {
			TAMIL: 40,
			ENGLISH: 70,
			SCIENCE: 86,
		},
	},
	subjects: ['ENGLISH', 'TAMIL', 'SCIENCE'],
};

export default config;
