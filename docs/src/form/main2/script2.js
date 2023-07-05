// NAVBAR
const navListWrapper = document.querySelector('.nav__list__wrapper')
const navLink = document.querySelectorAll('.nav__menu__item')
const navToggle = document.querySelector('.nav__toggle')

navToggle.addEventListener('click', function () {
	navListWrapper.classList.toggle('show')
})

navLink.forEach(item=> {
	item.addEventListener('click', function () {
		navListWrapper.classList.remove('show')
	})
})







// BLOG
const blogList = document.querySelector('.blog__list')

let startX = 0
let pressed = false
let scrollLeftCurr = 0

blogList.addEventListener('mousedown', function (e) {
	e.preventDefault()

	pressed = true
	startX = e.clientX
	scrollLeftCurr = this.scrollLeft

	this.style.cursor = 'grabbing'
})

blogList.addEventListener('mouseleave', mouseLeave)
window.addEventListener('mouseup', mouseLeave)

function mouseLeave() {
	pressed = false}

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
  const loginForm = document.getElementById('login-form');
  const messageElement = document.getElementById('message');

  
  var auth = firebase.auth();

  // Logout function
function logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.href = "../login.html"; // Redirect to the login page
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  //ratting 
  let popup= document.getElementById("popup");
  let popup1= document.getElementById("popup1");
  
  function openpopup(){
      popup.classList.add("open-popup");
  }
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
  const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
  
  
  