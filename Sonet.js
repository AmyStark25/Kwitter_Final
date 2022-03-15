
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAnECbM5yg3RlH1Q9j1wtddKXg9LunktIU",
      authDomain: "kwitter-64735.firebaseapp.com",
      databaseURL: "https://kwitter-64735-default-rtdb.firebaseio.com",
      projectId: "kwitter-64735",
      storageBucket: "kwitter-64735.appspot.com",
      messagingSenderId: "743038540874",
      appId: "1:743038540874:web:1528e33715617d6abd5ab3"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !"; 

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : 'adding room name'
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_room_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      console.log("room Name - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#" + room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
