var firebaseConfig = {
    apiKey: "AIzaSyBvkWPrlQbbqbww13kvmyx8rohJ5c7ma50",
    authDomain: "stop-drop-yoga-e0728.firebaseapp.com",
    databaseURL: "https://stop-drop-yoga-e0728-default-rtdb.firebaseio.com/",
    projectId: "stop-drop-yoga-e0728",
    storageBucket: "stop-drop-yoga-e0728.appspot.com",
    messagingSenderId: "358675567690",
    appId: "1:358675567690:web:a8f7c940a52feff2ec02b3"
  };


  firebase.initializeApp(firebaseConfig);

  var messageRef = firebase.database().ref('messages');

  document.getElementById('form').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();
       var email = getInput("email");
    
       saveMessage(email);

       document.getElementById('form').reset();
  }

   function getInput(id){
       return document.getElementById(id).value;
   }

   function saveMessage(email){
       var newMessageRef = messageRef.push();
       newMessageRef.set({
           email: email,
       });
   }