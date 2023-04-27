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
  var databaseRef = firebase.database().ref("dogs/dog1");
  databaseRef.on("value", function(snapshot) {
  var data = snapshot.val();
  var age = data.age;
  var name = data.name;
  var breed = data.breed;
  var img_loc = data.img_loc;
  const ageHTML = document.querySelector('.age');
  ageHTML.innerHTML = age;
  const nameHTML = document.querySelector('.name');
  nameHTML.innerHTML = name;
  const breedHTML = document.querySelector('.breed');
  breedHTML.innerHTML = breed;
  const imgHTML = document.querySelector('.img-loc');
  imgHTML.src = "/"+img_loc;
  const desHTML = document.querySelector('.description');
  desHTML.innerHTML = data.description;
  });