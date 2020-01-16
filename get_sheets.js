const { google } = require('googleapis');


let spreadsheetId = "1w7PMg4G2pvQePRNixb6CO8h9DQABfts3HnwT70HggPU";

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
