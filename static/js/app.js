// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// add data to table

data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


// get button to work
// example from class:   var upvote = d3.select(".upvote");

var filterButton = d3.select(".btn-default");

// Select the form
var form = d3.select("#form");

filterButton.on("click", function() {
   
  });

// Create event handlers 
filterButton.on("click", filterTable);
form.on("submit", filterTable);

// Complete the event handler function for the form
function filterTable() {

    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var input = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = input.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);

        });