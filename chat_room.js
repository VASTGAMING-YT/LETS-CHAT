const firebaseConfig = {
      apiKey: "AIzaSyCp0UboetC1FxfkrfYiLEMzhkALynE8Mo8",
      authDomain: "kwitter-a94ae.firebaseapp.com",
      databaseURL: "https://kwitter-a94ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-a94ae",
      storageBucket: "kwitter-a94ae.appspot.com",
      messagingSenderId: "760137114603",
      appId: "1:760137114603:web:c8732a3f41fd36513eafae"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
