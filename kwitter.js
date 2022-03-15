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

function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "Sonet_room.html";
}

