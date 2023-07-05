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
// mode
const mode = document.getElementById('mode');
if(this.checked){
    document.body.classList.add('dark');
 }
 else{
    document.body.classList.remove('dark');
 }
mode.addEventListener('change', function(){
 if(this.checked){
    document.body.classList.add('dark');
 }
 else{
    document.body.classList.remove('dark');
 }
})
function calculateSeasonPrice() {
    // Get the price input element
    const priceInput = document.getElementById('priceInput');
    // Get the season price input element
    const seasonPriceInput = document.getElementById('seasonPriceInput');

    // Get the value of the price input
    const price = parseFloat(priceInput.value);

    // Calculate the season price by increasing the price by 10
    const seasonPrice = price * 12.5;

    // Update the season price input value
    seasonPriceInput.value = 'Rs.' + seasonPrice + '/=';
}