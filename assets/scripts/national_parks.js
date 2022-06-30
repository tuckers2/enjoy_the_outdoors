//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

//getting the dropdown list into the JS file for us to work with
let searchTypeDDL = document.querySelector("#searchTypeDDL");

//get the locations dropdown so we can work with it
let locationsDDL = document.querySelector("#locations");

//get the locations dropdown so we can work with it
let typesDDL = document.querySelector("#types");

//get the park table so we can work with it
let parksTable = document.querySelector("#parksTable");

searchTypeDDL.addEventListener("change", function(event){

  console.log("search event target value " + event.target.value)

    //check which search type

    //if search type is location then show locations dropdown

    //if search type is type then show types dropdown

    //hide all the dropdowns and then check which is supposed to show below
    locationsDDL.classList.add("d-none")
    typesDDL.classList.add("d-none")

    if(event.target.value === "location"){
        generateLocationsDDLOptions();
        locationsDDL.classList.remove("d-none")
        typesDDL.classList.add("d-none")
    }

    if(event.target.value === "type"){
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
        locationsDDL.classList.add("d-none")
    }

})

locationsDDL.addEventListener("change", function(event){
    console.log(event.target.value)
    console.log("search event target value " + event.target.value)

  console.log(nationalParksArray)

  let bigCities = nationalParksArray.filter(locationsArray => locationsArray.State === "Maine");

    let filterednationalParksArray = 
    nationalParksArray.filter(filterednationalParksArray => filterednationalParksArray.State === event.target.value);
  
    console.log(filterednationalParksArray)

    createParksTable(filterednationalParksArray)

})

typesDDL.addEventListener("change", function(event){
  console.log(event.target.value)
  console.log("search event target value " + event.target.value)

console.log(nationalParksArray)

// if(t==="By location:"){
//   e=a.filter(e=>e.State===l)}
// else{
//   e=a.filter(e=>e.LocationName.toLowerCase().includes(l.toLowerCase()))}

  let filterednationalParksArray = 
  nationalParksArray.filter(filterednationalParksArray => 
                            filterednationalParksArray.LocationName.toLowerCase().includes(event.target.value.toLowerCase()))

  console.log(filterednationalParksArray)

  createParksTable(filterednationalParksArray)

})

function generateLocationsDDLOptions(){

    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`

    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    })

}

function generateTypesDDLOptions(){

    parkTypesArray.forEach((partkType) => {
        typesDDL.innerHTML += `<option value="${partkType}">${partkType}</option>`
    })

}


function createParksTable(filteredArray) {

  // "LocationID": "ABLI",
  // "LocationName": "Abraham Lincoln Birthplace National Historical Park",
  // "Address": "2995 Lincoln Farm Road",
  // "City": "Hodgenville",
  // "State": "Kentucky",
  // "ZipCode": 42748,
  // "Phone": "(270) 358-3137",
  // "Fax": "(270) 358-3874",
  // "Latitude": 37.535671,
  // "Longitude": -85.7340637,
  // "Location":{"coordinates": [-85.7340637,37.535671],"type":"Point"}

  console.log("inside createParksTable");

  // clear out table
  parksTable.innerHTML="";

  var headers = ["Location Name", "Address", "City", "State", "Phone", "Fax", "Location ID"];
      
  for(var i = 0; i < filteredArray.length; i++) {
      var row = parksTable.insertRow(i);
      row.insertCell(0).innerHTML = filteredArray[i].LocationName;
      row.insertCell(1).innerHTML = filteredArray[i].Address;
      row.insertCell(2).innerHTML = filteredArray[i].City;
      row.insertCell(3).innerHTML = filteredArray[i].State;
      row.insertCell(4).innerHTML = filteredArray[i].Phone;
      row.insertCell(5).innerHTML = filteredArray[i].Fax;
      row.insertCell(6).innerHTML = filteredArray[i].LocationID;
  }

  var header = parksTable.createTHead();
  var headerRow = header.insertRow(0);
  for(var i = 0; i < headers.length; i++) {
      headerRow.insertCell(i).innerHTML = headers[i];
  }

  document.body.append(parksTable);
}







