/* eslint-disable max-lines-per-function */
import React from 'react';
import { VegaLite } from 'react-vega';

const HeatMap = ({ config: { chartProps: { width, height }}, data }) => {
	const spec = {
		description: 'A Heat Map .',
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		config: {
			view: {
				strokeWidth: 0, step: 13,
			},
			axis: {
				domain: false, grid: true, tickBand: 'extent',
			},
		},
		params: [
			{
				name: 'brush',
				select: 'interval',
			},
		],
		mark: 'rect',
		encoding: {
			x: {
				field: 'subjectName',
				type: 'nominal',
			},
			y: {
				field: 'studentName',
				type: 'nominal',
			},
			color: {
				aggregate: 'max',
				legend: { title: 'marks' },
				condition: {
					param: 'brush',
					field: 'marks',
					type: 'quantitative',
				},
			},
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite { ...{ spec, data, actions } }/>;
};

export default HeatMap;
