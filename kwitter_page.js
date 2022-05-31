//YOUR FIREBASE LINKS


    
    var firebaseConfig = {
      apiKey: "AIzaSyBVNyYZzQVWKom__AmwT8eEcD0ZabW2iZI",
      authDomain: "kwit-50493.firebaseapp.com",
      databaseURL: "https://kwit-50493-default-rtdb.firebaseio.com",
      projectId: "kwit-50493",
      storageBucket: "kwit-50493.appspot.com",
      messagingSenderId: "358251988675",
      appId: "1:358251988675:web:08eb983b712d14f4a7c476",
     
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name =localStorage.getItem("username");
room_name =localStorage.getItem("room_name");

 function send(){
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       Name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value = "";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  // message_data variable will hold all the messages, likes and username for every message.it is like an array       
//Start codeo
// we will create 3 variables to store the values sent in the firebase
names = message_data['Name'];
message = message_data['message'];
like = message_data['like'];
// we will now create the HTML part to show the message in the rroom_page
name_label = "<h4> " + names + "<img class='user_tick' src='tick.png'>";
message_label = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row = name_label + message_label + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("username")
      window.location = "index.html"
    }
    function updateLike(firebase_message_id) {
    console.log("clicked on like button - " + firebase_message_id);
    button_id = firebase_message_id;
    //Now assign the message_id value to a new variable button_id
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    firebase.database().ref(room_name).child(firebase_message_id).update({ 
          like: updated_likes });
    }