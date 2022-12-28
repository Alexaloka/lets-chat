//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBPpP6RMBYcSnynavADYd4dOn63_SnfEPc",
      authDomain: "kwitter-9cf6c.firebaseapp.com",
      databaseURL: "https://kwitter-9cf6c-default-rtdb.firebaseio.com",
      projectId: "kwitter-9cf6c",
      storageBucket: "kwitter-9cf6c.appspot.com",
      messagingSenderId: "325700214679",
      appId: "1:325700214679:web:0827992aa4a0c81e646ed2"
    };
    user_name=localStorage.getItem("user_name");
    firebase.initializeApp(firebaseConfig); 
    room_name=localStorage.getItem("room_name");
    function send()
    {
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value ="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

