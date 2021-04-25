var firebaseConfig = {
      apiKey: "AIzaSyDbd9bbtAEB8B5Qe0UX5OXSikCZhwQuafI",
      authDomain: "project-kwitter-d10a1.firebaseapp.com",
      databaseURL: "https://project-kwitter-d10a1-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-d10a1",
      storageBucket: "project-kwitter-d10a1.appspot.com",
      messagingSenderId: "346227828195",
      appId: "1:346227828195:web:55d84649b641dfca6c2cd6",
      measurementId: "G-YEVEKLKNG1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name"); 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function send(){
       msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = ""; 
}