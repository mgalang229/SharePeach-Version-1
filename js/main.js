const heading = document.querySelector('h1');
const section = document.querySelector('section');
const section2 = document.querySelector('section:nth-child(3)');
const continueBtn = document.querySelector('.continueBtn');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const signUp = document.querySelector('.signUp');
const footer = document.querySelector('footer');
const logBtn = document.querySelector('.logBtn');
const userLog = document.querySelector('#user-log');
const signBtn = document.querySelector('.signBtn');
const usernameSign = document.querySelector('.usernameSign');
const passwordSign = document.querySelector('.passwordSign');
const passwordSign2 = document.querySelector('.passwordSign2');
const signMeUpBtn = document.querySelector('.signMeUpBtn');
const goBackSpan = document.querySelector('.alreadyAccount span');

heading.onclick = function(){
	window.location = 'index.html';
}

// Focus on username textfield

try{
	document.addEventListener('DOMContentLoaded', username.focus());
}
catch(err){
	console.log('Document Loaded');
}

// Get JSON Data

let request = new XMLHttpRequest();

//Username Validation

try{
	username.addEventListener('keyup', function(event){
		if(event.keyCode === 13){
			event.preventDefault();
			continueBtn.click();
		}
	});
	continueBtn.addEventListener('click', verifyUser);
	function verifyUser(){
	continueBtn.style.outline = 'none';
	request.open('GET', 'json/accounts.json', true);
	request.onload = function() {
		let data = JSON.parse(this.response);
		data.forEach(element => {
			if(username.value === element.username){
				localStorage.setItem('username', username.value);
				userLog.innerHTML = localStorage.getItem('username');
				continueBtn.style.outline = 'none';
				section.style.display = 'none';
				section2.style.display = 'block';
				section2.style.height = 'auto';
				footer.style.position = 'fixed';
				footer.style.bottom = '0';
				password.focus();
				return
			}
		});
		username.value = '';
		alertDiv('Incorrect Username');
	}
	request.send();	
	resetButton();
	}
}
catch(err){
	console.log('Username Input Loaded');
}
	
// Password Validation

try{
	password.addEventListener('keyup', function(event){
		if(event.keyCode === 13){
			event.preventDefault();
			logBtn.click();
		}
	});
	logBtn.addEventListener('click', verifyPass);
	function verifyPass(){
	logBtn.style.outline = 'none';
	request.open('GET', 'json/accounts.json', true);
	request.onload = function(){
		let data = JSON.parse(this.response);
		data.forEach(element => {
			if(localStorage.getItem('username') === element.username && password.value === element.password){
				console.log('success');
				window.location.href = 'main.html';
				preventBack();
				return
			}
		});
		password.value = '';
		alertDiv2('Incorrect Password');
	}
	request.send();
	resetButton2();
}
}
catch(err){
	console.log('Password Input Loaded');
}

// Prevent from going back to previous page
	
function preventBack(){
	window.history.forward();
}
setTimeout('preventBack()', 0);
window.onunload = function(){null};

// Alert messages when credentials are wrong

function alertDiv(message){
	const div = document.createElement('div');
	div.className = 'alert';
	div.appendChild(document.createTextNode(message));
	section.insertBefore(div, username);
	setTimeout(() => document.querySelector('.alert').remove(), 1000);
}

function alertDiv2(message){
	setTimeout(function() {
		const div = document.createElement('div');
		div.className = 'alert';
		div.appendChild(document.createTextNode(message));
		section2.insertBefore(div, password);
		setTimeout(() => document.querySelector('.alert').remove(), 1000);
	}, 700);
}

// Changing colors function of continueBtn

function resetButton(){
	continueBtn.style.background = '#E9E9E9';
	continueBtn.style.color = '#B6B6B6';
	setTimeout(() => {
		continueBtn.style.background = '';
		continueBtn.style.color = '';
	},2000);
}

function resetButton2(){
	logBtn.style.background = '#E9E9E9';
	logBtn.style.color = '#B6B6B6';
	setTimeout(() => {
		logBtn.style.background = '';
		logBtn.style.color = '';
	},2000);
}

// Transferring to Sign up page

try{
	signBtn.addEventListener('click', (e) => {
		e.preventDefault();
		console.log('Transferring to another page.');
		window.location.href = 'signpage.html';
	});
}
catch(err){
	console.log('Sign Up Button Loaded');
}

// Sign up page functions

try{
	goBackSpan.onclick = function(){
		window.location.href = 'index.html';
	}
	
	passwordSign2.addEventListener('keyup', function(event){
		if(event.keyCode === 13){
			event.preventDefault();
			signMeUpBtn.click();
		}
	});
	signMeUpBtn.addEventListener('click', accountCreation);
	function accountCreation(){
		
	}
}
catch(err){
	console.log('Next Page Unloaded');
}
