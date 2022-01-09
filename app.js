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

// start new function to filter data by date 
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the data using that date.
   if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
   }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
}
