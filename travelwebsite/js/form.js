
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyCeKWauHEEH69D1nCcw08sZ2nAYUmyc0tk",
  authDomain: "login-demo-f5aee.firebaseapp.com",
  projectId: "login-demo-f5aee",
  storageBucket: "login-demo-f5aee.appspot.com",
  messagingSenderId: "914095535007",
  appId: "1:914095535007:web:f1f4fc635d6a7923dfc3aa",
  measurementId: "G-Q5BFTH8WJZ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
	
    promise.catch(e=>alert(e.message));
	
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
	  if(window.location != "file:///F:/travelwebsite/travelwebsite/index.html"){
	  window.location = "index.html";
	  }
	  
    }else{
      alert("No Active user Found")
    }
  })
