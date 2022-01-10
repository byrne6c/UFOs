// import the data from data.js
const tableData = data;
console.log("hello wolrd!");
// Reference the HTML table using d3
// Get a reference to the table using t3
let tbody = d3.select("tbody");
console.log(data);
function buildTable(data) {
tbody.html("");
  data.forEach(function(dataRow) {
    console.log(dataRow);
    let row = tbody.append("tr");
    Object.entries(dataRow).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      let cell = row.append("td");
      cell.text(value);
    });
  });
} // start new function to filter data by date 
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
