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
  const fpass_Form = document.getElementById('f_pass-form');
  const messageElement = document.getElementById('message');

  
  var auth = firebase.auth();


  document.getElementById('f_pass-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var email = document.getElementById('email').value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
      alert('Password reset email sent! Please check your inbox.');
       // Display success message
       fpass_Form.reset();
       messageElement.textContent = 'Password reset email sent! Please check your inbox.';
       messageElement.style.color = 'white';
       messageElement.style.background = 'green';
      // Redirect to the login page
      //window.location.href = "login.html";
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      fpass_Form.reset();
       // Display error message
       messageElement.textContent = error.message;
       messageElement.style.color = 'white';
       messageElement.style.background = 'red';
      // Handle password reset error
    });
});