import FilterManager from '../services/FilterManager';

const actions = {
	changingRange: (context) => ({
		range: FilterManager.updateRange(context),
	}),
	changingTab: (context) => ({
		value: context.data,
	}),
	Toggle: (context) => ({
		alignment: context.data,
	}),
};

export default actions;
