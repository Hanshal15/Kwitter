
var firebaseConfig = {
      apiKey: "AIzaSyC2XBP4fYa3vZab8mAx9HiPGvNo99-Fi6w",
      authDomain: "kwitter-f7bbe.firebaseapp.com",
      databaseURL: "https://kwitter-f7bbe-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7bbe",
      storageBucket: "kwitter-f7bbe.appspot.com",
      messagingSenderId: "747071201226",
      appId: "1:747071201226:web:202aecf6ff2d61d462b933",

    };
    firebase.initializeApp(firebaseConfig);
  
    function addroom() {
      roomname=document.getElementById("roomname").value; 
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding roomname"
        });
      localStorage.setItem("roomname",roomname);  
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname-"+Room_names);
       row="<div class='roomname' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      //End code
      });});}
getData();

function redirecttoroomname(name) {
  console.log(name);
  localStorage.setItem("roomname",name)
  window.location="kwitter_page.html";
  }