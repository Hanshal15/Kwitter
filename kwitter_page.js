var firebaseConfig = {
      apiKey: "AIzaSyC2XBP4fYa3vZab8mAx9HiPGvNo99-Fi6w",
      authDomain: "kwitter-f7bbe.firebaseapp.com",
      databaseURL: "https://kwitter-f7bbe-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7bbe",
      storageBucket: "kwitter-f7bbe.appspot.com",
      messagingSenderId: "747071201226",
      appId: "1:747071201226:web:202aecf6ff2d61d462b933",
}
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username")
room_name=localStorage.getItem("roomname")


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
      window.location="index.html";
}

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0,
      })
      document.getElementById("msg").value="";
}