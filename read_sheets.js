const { google } = require('googleapis');
exports.readSheet = ( spreadsheetId, range, auth ) => {
	const sheets = google.sheets({version: 'v4', auth});

	sheets.spreadsheets.values.get({
		spreadsheetId,
		range,
	}, (err, result) => {
	if (err) {
		// Handle error
		console.log(err);
	} else {
		//TODO: Transform this information into a map, which allows searching
		let sheetMap = new Map();
		for(let i =0; i< results.values[0].length ; ++i) {
			for( let j=1; i< results.values.data.length; ++i ) {}
		}
				
		const numRows = result.values ? result.values.length : 0;
		console.log(`${numRows} rows retrieved.`);
	}
	});	
}
