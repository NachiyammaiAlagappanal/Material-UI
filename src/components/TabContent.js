import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MarkSheetD from './MITable';

const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};

const TabContent = (context) => {
	const { state: { value }} = context;

	return	<Box sx={ { backgroundColor: 'background.paper' } }>
		<Tabs
			value={ value }
			onChange={ (event, data) => context.actions
				.changingTab(data) }
			centered={ true }
			textColor="inherit"
			indicatorColor="secondary"
		>
			<Tab label="Data"/>
			<Tab label="Reports"/>
		</Tabs>
		<TabPanel value={ value } index={ 0 }>Input data need to update
		</TabPanel>
		<TabPanel value={ value } index={ 1 }>{ MarkSheetD(context)}
		</TabPanel>
	</Box>;
};

export default TabContent;
