import { filter } from '@laufire/utils/collection';

const FilterManager = {
	filterMark: (context) => {
		const { data, state: { range }} = context;

		return filter(data, (d) =>
			d.ENGLISH >= range[0] && d.ENGLISH <= range[1]);
	},
};

export default FilterManager;
