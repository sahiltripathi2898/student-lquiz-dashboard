import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, score, questions, time) {
	return { id, name, score, questions, time };
}

const rows = [
	createData(0, 'Sahil Tripathi', '16', '8', '6 sec'),
	createData(1, 'Mannat Padha', '14', '7', '11 sec'),
	createData(2, 'Madhav Wadhwan', '8', '4', '4 sec'),
	createData(3, 'Subham Jajoo', '6', '3', '9 sec'),
	createData(4, 'Yogesh Kumar', '2', '1', '10 sec'),
];

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(8),
	},
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title>Student Leader Board</Title>
			<Table size="medium">
				<TableHead>
					<TableRow>
						<TableCell style={{ fontWeight: '600', fontSize: '18px' }}>
							Name
						</TableCell>
						<TableCell style={{ fontWeight: '600', fontSize: '18px' }}>
							Total Score
						</TableCell>
						<TableCell style={{ fontWeight: '600', fontSize: '18px' }}>
							Correct Answers
						</TableCell>
						<TableCell
							align="left"
							style={{ fontWeight: '600', fontSize: '18px' }}
						>
							Total Time
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.score}</TableCell>
							<TableCell>{row.questions}</TableCell>
							<TableCell align="left">{row.time}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}
