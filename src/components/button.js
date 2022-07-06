import { React } from 'react';
import { Button, ButtonGroup } from '@mui/material';

const AddButton = () =>

	<ButtonGroup>
		<Button variant="contained" size="large" color="success"> +
		</Button>
		<Button variant="outlined" size="medium" color="warning"> -
		</Button>
		<Button variant="contained" size="small" color="primary"> *
		</Button>
	</ButtonGroup>;

export default AddButton;
