
mountainsDDL.addEventListener("change", function(event){
  
  console.log("mountainsArray: " + mountainsArray)

  console.log("inside mountainsDDL event listener")

  let selectedMountain = mountainsArray.filter((mountain) => {
    return mountain.name === event.target.value
  })

  createMountainCard(selectedMountain[0])

})

  function createMountainCard(mountain){
    
    // example mountain entry
    // -----------------------
    // "name": "Mt. Washington",
    // "elevation": 6288,
    // "effort": "Strenuous",
    // "img": "Washington-StoryImage_2.jpg",
    // "desc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
    // "coords": {
    //     "lat": 44.270403,
    //     "lng": -71.303501


    let card=""


    card += 
    `<div class="card-img-caption">
     <h2 class="card-text text-uppercase font-weight-bold">${mountain.name}</h2>
     <img src="/assets/images/mountains/${mountain.img}" class="card-img-top" alt="..."
     </div>
     <div class="card-body">
     <h3 class="card-title">${mountain.desc}</h3>
     <h2 class="card-title">Elevation: ${mountain.elevation}</h2>
     <h2 class="card-title">Latitude : ${mountain.coords.lat}</h2>
     <h2 class="card-title">Longatude: ${mountain.coords.lng}</h2>
     </div>`

    mountainsCard.innerHTML = card;

  }
  
