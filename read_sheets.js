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
		//console.log( result.values.data );
		for(let i =1; i< result.data.values.length ; ++i) {
			for( let j=0; j< result.data.values[i].length; ++j ) {
				sheetMap.set( result.data.values[0][j], result.data.values[i][j] );	
			}
		}
		console.log( sheetMap );
				
		const numRows = result.values ? result.values.length : 0;
		console.log(`${numRows} rows retrieved.`);
	}
	});	
}
