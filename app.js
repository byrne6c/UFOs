// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// start a new function to build table
function buildTable(data) {
    //clear any existing data
	tbody.html("");
    // loop through each object in the data
    data.forEach((dataRow) => {
    // add arguement: append row & cells for each value in the row
        let row = tbody.append("tr");
    // set a for loop function for each datafield within array, for the datarow within the table    
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
    // append each value as a table cell (td)   
            cell.text(val);
        }
    );
});
}