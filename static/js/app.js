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

filterButton.on("click", function() {
   
  });

// Create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// Complete the event handler function for the form
function filterTable() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var input = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.bloodType === inputValue);