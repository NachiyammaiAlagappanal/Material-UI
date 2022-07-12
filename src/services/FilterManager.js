/* eslint-disable no-console */
import { filter } from '@laufire/utils/collection';

const FilterManager = {
	filterMark: (context) => {
		const { data, state: { range }, config: { subjects }} = context;

		return filter(data, (d) =>
			subjects.some((subject) =>
				d[subject] >= range[subject][0]
			&& d[subject] <= range[subject][1]));
	},
	updateRange: (context) => {
		const { data, state: { range }} = context;

		return { ...range, ...data };
	},
};

export default FilterManager;
