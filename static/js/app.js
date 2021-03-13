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
   console.log("you clicked it")
  });