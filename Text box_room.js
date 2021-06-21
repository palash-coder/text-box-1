//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyD26bVVIB5qVTvgcaLwFbh8I5zl3wChlMM",
    authDomain: "kwitter-2cd28.firebaseapp.com",
    projectId: "kwitter-2cd28",
    storageBucket: "kwitter-2cd28.appspot.com",
    messagingSenderId: "13131347643",
    appId: "1:13131347643:web:48d5303a8a89616f67db9e",
    measurementId: "G-5FJPTNZK46"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);``

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();