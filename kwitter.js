function login(){
  name_input = document.getElementById("name_text").value;
localStorage.setItem("username",name_input);
window.location="kwitter_room.html";
document.getElementById("name_text").value="";
}