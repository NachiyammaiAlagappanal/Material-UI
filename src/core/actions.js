import FilterManager from '../services/FilterManager';

const actions = {
	changingRange: (context) => ({
		range: FilterManager.updateRange(context),
	}),
};

export default actions;
