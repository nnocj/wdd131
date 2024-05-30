
// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

  // Alternative way to use loops to avoid redundancy or repetition in the code.

  const foodUnlistedElement = document.querySelector("#favorite-foods");
  
  function mapFavoriteFoods(food) {
    //create a list element and place in the text.
    let favFood = document.createElement("li");
    favFood.textContent = food;
    
    return favFood;
  };

  myInfo.favoriteFoods.forEach(mapFavoriteFoods);

  //Another alternative way which can be more effective. 

  function mapFavoriteFoods1(food) {
    return `<li>${food}</li>`
  };
  
  // remember the .map function creates another array of the older or existing array.
  // Therefore a new array is formed and assigned the new variable which contains all the list.
  const foodElements = myInfo.favoriteFoods.map(mapFavoriteFoods);

  //Then from there we can be able to join it to the unlisted element which we can create and call.
  document.querySelector("#favorite-foods").appendChild(foodElements);

  //Alternate 2
  foodUnlistedElement.innerHTML = foodElements.Join("");

  //Alternate 
  const foodElements1 = document.querySelector("#favorite-foods");

  const foodListedElement = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);

  foodElements1.innerHTML = foodListedElement.Join("");

  //Alternate 3
  //step1
  function foodsTemplate(food) {
    return `<li>${food}</li>`
  };

  //step2
  function placesTemplate(place) {
    //return <li><dt>${place.place}</dt><dd>${place.length}</dd></li>
  }

  //step3

  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);

    return htmlList.Join("");
  };

  //step4
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  foodsElement.innerHTML = generateListMarkup (myInfo.favoriteFoods, foodsTemplate);
  placesElement.innerHTML = generateListMarkup(myInfo.places, placesTemplate);

  //loops final assignment
  const DAYS = 6;
  const LIMIT = 30;
  let studentReport = [11, 42, 33, 64, 29, 37, 44];
  
  //option 1 using a for loop
  for (item in studentReport) {
    if (studentReport[item] < 30) {
        print(studentReport[item]);
    }
  }

  //using a while loop
  i = 0;
  while (i < studentReport.length)
    { 
      if (studentReport[i] < LIMIT)
          console.log(studentReport[i]);

      i++;
    };

  //for each loop. Not that the for each function directly targets the actual values
  // of the numbers.
  studentReport.forEach(function(item){
    if (item < LIMIT) {
        console.log(item);
    }
  });
  

  

