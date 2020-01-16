const { google } = require('googleapis');
export.modules = 
function readSheet( spreadSheetId, range ) {
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
