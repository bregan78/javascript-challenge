// from data.js
var tableData = data;


var button1 = d3.select("#filter-btn");
var form1 = d3.select("#form");


button1.on("click", runEnter);
form1.on("submit",runEnter);

var list = d3.select("#tablebody");
list.html("");



function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    var list = d3.select("#tablebody");
    list.html("");
    setuptable(filteredData);
      
};

function setuptable(somedata) {

    somedata.forEach(function(element) {
        console.log(element);
        var row = list.append("tr");
        Object.entries(element).forEach(function([key, value]) {
            console.log(key, value);

            //Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

setuptable(tableData);