const { google } = require('googleapis');
exports.readSheet = ( spreadSheetId, range ) => {
	const sheets = google.sheets({version: 'v4', auth});

	this.sheetsService.spreadsheets.values.get({
	  spreadsheetId,
	  range,
	}, (err, result) => {
	  if (err) {
	    // Handle error
	    console.log(err);
	  } else {
	    const numRows = result.values ? result.values.length : 0;
	    console.log(`${numRows} rows retrieved.`);
	  }
	});	
}
