//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBDjdtUehmciUiYAQ559cwXQPPdBf8mKhM",
      authDomain: "kwitter-92bc6.firebaseapp.com",
      databaseURL: "https://kwitter-92bc6-default-rtdb.firebaseio.com",
      projectId: "kwitter-92bc6",
      storageBucket: "kwitter-92bc6.appspot.com",
      messagingSenderId: "520027520394",
      appId: "1:520027520394:web:1d4fa0b3dcd40850e0dc73"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "letschat_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room name = "+Room_names);
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();
  
  function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "letschat_page.html";
  }
  function logout(){
        localStorage.removeItem("room_name");
        localStorage.removeItem("user_name");
        window.location = "index.html";
  }