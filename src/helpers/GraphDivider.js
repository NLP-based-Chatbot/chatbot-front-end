import moment from 'moment';

export const MonthDivider = sessions => {
	let MonthCounter = [0, 0, 0, 0, 0];
	for (let session of sessions) {
		let month = `${moment(session.timestamp).format('MMM MMMM')}`.substr(0, 3);

		switch (month) {
			case `${moment().format('MMM MMM')}`.substr(0, 3):
				MonthCounter[4] += 1;
				break;
			case `${moment().add(-1, 'months').format('MMM MMM')}`.substr(0, 3):
				MonthCounter[3] += 1;
				break;
			case `${moment().add(-2, 'months').format('MMM MMM')}`.substr(0, 3):
				MonthCounter[2] += 1;
				break;
			case `${moment().add(-3, 'months').format('MMM MMM')}`.substr(0, 3):
				MonthCounter[1] += 1;
				break;
			case `${moment().add(-4, 'months').format('MMM MMM')}`.substr(0, 3):
				MonthCounter[0] += 1;
				break;
			default:
				console.log('Wrong input');
		}
	}

	return MonthCounter;
};
