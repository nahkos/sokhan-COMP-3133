const csv = require('csv-parser');
const fs = require('fs');
const CSVToJSON = require('csvtojson');

var data = fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

 
// convert users.csv file to JSON array
var convert = CSVToJSON().fromFile('input_countries.csv')
.then(countries => {
    var result=countries.filter(obj=> obj.country == "Canada");
// Write JSON array to a file
fs.writeFile('canada.txt', JSON.stringify(result, null, 4), (err) => {
if (err) {
    throw err;
}
console.log("JSON array is saved.");
});
    // countries is a JSON array
    // log the JSON array
    console.log(countries);
}).catch(err => {
    // log error if any
    console.log(err);
});
 
// convert users.csv file to JSON array
convert = CSVToJSON().fromFile('input_countries.csv')
.then(countries => {
    var result=countries.filter(obj=> obj.country == "United States");
// Write JSON array to a file
fs.writeFile('usa.txt', JSON.stringify(result, null, 4), (err) => {
if (err) {
    throw err;
}
console.log("JSON array is saved.");
});
    // countries is a JSON array
    // log the JSON array
    console.log(countries);
}).catch(err => {
    // log error if any
    console.log(err);
});
 