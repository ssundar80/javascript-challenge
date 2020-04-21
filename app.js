// from data.js
var tableData = data;

// YOUR CODE HERE!
function updateTable(data){
var tbody = d3.select("tbody");
d3.select("tbody").selectAll("tr").remove();
console.log(data);
//Use D3 to loop through the data and append a new row with cell values for each column
data.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
//Create a Button Click listener
var button = d3.select("#filter-btn");

button.on("click", function() { 
    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement1= d3.select("#city");
  var inputElement2= d3.select("#state");
  var inputElement3= d3.select("#country");
  var inputElement4= d3.select("#shape");

  // Get the value property of the input element
  var inputValue = inputElement.property("value").toLowerCase();
  var inputValue1 = inputElement1.property("value").toLowerCase();
  var inputValue2 = inputElement2.property("value").toLowerCase();
  var inputValue3 = inputElement3.property("value").toLowerCase();
  var inputValue4 = inputElement4.property("value").toLowerCase();

  console.log(inputValue);
  console.log(inputValue1);
  // console.log(tableData);
  var filteredData = tableData;
  // var filteredData = tableData.filter(date => date.datetime === inputValue)
                              // .filter(city => city.city === inputValue1)
  if (inputValue === ""){console.log("ok")}
    else {
       filteredData = filteredData.filter(date => date.datetime === inputValue);
    console.log("not ok")};
;
  if (inputValue1 === ""){console.log("ok")}
    else {
      filteredData = filteredData.filter(city => city.city === inputValue1);
    console.log("not ok")};
;
if (inputValue2 === ""){console.log("ok")}
    else {
       filteredData = filteredData.filter(state => state.state === inputValue2);
    console.log("not ok")};
;
if (inputValue3 === ""){console.log("ok")}
    else {
       filteredData = filteredData.filter(country => country.country === inputValue3);
    console.log("not ok")};
;
if (inputValue4 === ""){console.log("ok")}
    else {
       filteredData = filteredData.filter(shape => shape.shape === inputValue4);
    console.log("not ok")};
;
  updateTable(filteredData);
  // console.log(filteredData);
});

updateTable(tableData);