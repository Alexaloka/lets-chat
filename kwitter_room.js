
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBPpP6RMBYcSnynavADYd4dOn63_SnfEPc",
      authDomain: "kwitter-9cf6c.firebaseapp.com",
      databaseURL: "https://kwitter-9cf6c-default-rtdb.firebaseio.com",
      projectId: "kwitter-9cf6c",
      storageBucket: "kwitter-9cf6c.appspot.com",
      messagingSenderId: "325700214679",
      appId: "1:325700214679:web:0827992aa4a0c81e646ed2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
