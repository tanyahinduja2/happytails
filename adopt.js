const firebaseConfig = {
    apiKey: "AIzaSyAqqAc7cIwN2Oz8VfTVGa-IV4NItlRxXjY",
    authDomain: "adopt-happytails.firebaseapp.com",
    databaseURL: "https://adopt-happytails-default-rtdb.firebaseio.com",
    projectId: "adopt-happytails",
    storageBucket: "adopt-happytails.appspot.com",
    messagingSenderId: "1020162831878",
    appId: "1:1020162831878:web:8a3a1d3cdddb5b78c0b587",
    measurementId: "G-WQD4C86P3R"
  };

firebase.initializeApp(firebaseConfig);
var databaseRef = firebase.database().ref("dogs");
databaseRef.on("value", function(snapshot) {
var data = snapshot.val();
var keys = Object.keys(data);
for(let j = 0; j < keys.length; j++) {
    var k = keys[j];
    var age = data[k].age;
    var name = data[k].name;
    var breed = data[k].breed;
    var img_loc = data[k].img_loc;
    console.log(name, age, breed, img_loc)
    var ageHTML = document.querySelector(`.age${j+1}`);
    ageHTML.innerHTML = age;
    var nameHTML = document.querySelector(`.name${j+1}`);
    nameHTML.innerHTML = name;
    var breedHTML = document.querySelector(`.breed${j+1}`);
    breedHTML.innerHTML = breed;
    var imgHTML = document.querySelector(`.img${j+1}`);
    imgHTML.src = img_loc;
    }
});


var databaseRef = firebase.database().ref("cats");
databaseRef.on("value", function(snapshot) {
var data = snapshot.val();
var keys = Object.keys(data);
for(let j = 0; j < keys.length; j++) {
    var k = keys[j];
    var age = data[k].age;
    var name = data[k].name;
    var breed = data[k].breed;
    var img_loc = data[k].img_loc;
    console.log(name, age, breed, img_loc)
    var ageHTML = document.querySelector(`.cat-age${j+1}`);
    ageHTML.innerHTML = age;
    var nameHTML = document.querySelector(`.cat-name${j+1}`);
    nameHTML.innerHTML = name;
    var breedHTML = document.querySelector(`.cat-breed${j+1}`);
    breedHTML.innerHTML = breed;
    var imgHTML = document.querySelector(`.cat-img${j+1}`);
    imgHTML.src = img_loc;
    }
});

