/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myProfile = {
    myName: 'Gavin Hart',
    myPhoto: './week2/images/me.jpeg',
    favoriteFoods: ["Potatoes", "Poppy seed chicken", "pudding", "bisquits and gravy"],
    hobbies: ["Hanging out with friends", "Camping", "Hiking"],
    placesLived: [],
    
};
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myProfile.placesLived = [
    {
    place: "Cave Junction, OR",
    length: 3
    },
    {
        place: "Kenai, AK",
        length: 11
    },
    {
        place: "Alaska",
        length: 1
    },
];
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").querySelector = myProfile.myName;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
photo = document.querySelector("#photo");
photo.setAttribute('src', `./images/${myProfile.myPhoto}`);
photo.setAttribute('alt', `Picture of ${myProfile.myName}`);

myProfile.favoriteFoods.forEach(food => {
let li = document.createElement('li');
li.textContent = food;
document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
let li = document.createElement('li');
li.textContent = hobby;
document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(livedAt => {
    let tr = document.createElement('tr');
    let tdPlace = document.createElement('td');
    let tdLength = document.createElement('td');

    tdPlace.textContent = livedAt.place;
    tdLength.textContent = livedAt.length;

    tr.appendChild(tdPlace);
    tr.appendChild(tdLength);

    document.querySelector('table').appendChild(tr);
});
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived