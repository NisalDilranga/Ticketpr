window.addEventListener('load', function () {
	document.body.classList.add('hide')
})



const allLink = document.querySelectorAll('a')

allLink.forEach(item=> {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		document.body.classList.remove('hide')
		setTimeout(()=> {
			window.location.href = this.href
		}, 500)
	})
})

// function openpopup(){
//     popup.classList.add("open-popup");
// }
function closepopup(){
    popup.classList.remove("open-popup");
}
function closepopup1(){
    popup1.classList.remove("open-popup1");
}
function checkValidity(inputData){
    if(key_path==inputData.index && key_code==inputData.pin){
        console.log("data added successfully")
        popup.classList.add("open-popup");
    }else{
        console.log("please check your name and key code again")
        popup1.classList.add("open-popup1");

    }
}
// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCT0dEPP6VSQvPx9EAoMfsoapqufYt6uJY",
    authDomain: "auth-18ac1.firebaseapp.com", 
    databaseURL: "https://auth-18ac1-default-rtdb.firebaseio.com", 
    projectId: "auth-18ac1",
    storageBucket: "auth-18ac1.appspot.com",
    messagingSenderId: "408701969524",
    appId: "1:408701969524:web:94c927bf65e11b6e11dd21"
  
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get the login form and message element
  const loginForm = document.getElementById('regi-form');
  const messageElement = document.getElementById('message');

  
  var auth = firebase.auth();
  
  document.getElementById('regi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var index  = document.getElementById('index').value;
    var confirmPassword = document.getElementById('cpassword').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      loginForm.reset();
      return;

    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert('User created successfully!');
       
        // Additional logic after successful login
        // Clear form inputs
        loginForm.reset();

        // Display success message
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'white';
        messageElement.style.background = 'green';
         window.location.href = "login.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        loginForm.reset();
        // Display error message
        messageElement.textContent = error.message;
        messageElement.style.color = 'white';
        messageElement.style.background = 'red';
        // Handle login error
      });
  });





