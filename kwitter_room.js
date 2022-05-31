
//ADD YOUR FIREBASE LINKS HERE
var  firebaseConfig = {
  apiKey: "AIzaSyBSzt_CRNC3w0_IkGOy8oMku4NC-hpvhcs",
  authDomain: "kwitter-894b8.firebaseapp.com",
  databaseURL: "https://kwitter-894b8-default-rtdb.firebaseio.com",
  projectId: "kwitter-894b8",
  storageBucket: "kwitter-894b8.appspot.com",
  messagingSenderId: "28762680978",
  appId: "1:28762680978:web:8ebaa1b237c451c680004b"
};
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("username")
 document.getElementById("welcome_user").innerHTML="Welcome " + user_name;
function addRoom()
  {
    room_name = document.getElementById("room_input").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
   document.getElementById("room_input").value = "";
  }


 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_style' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row;
       //End code
      });});}
getData();
function logout(){
  localStorage.removeItem("room_name")
  localStorage.removeItem("username")
  window.location = "index.html"
}

function redirectToRoomName(name_chosen) {
  console.log("room name chosen= " + name_chosen);
  localStorage.setItem("room_name", name_chosen);
  window.location = "kwitter_page.html";
}
