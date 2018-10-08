let url = 'https://randomuser.me/api/';
let fullNameDisplay = document.querySelector('#fullname');
let btn = document.querySelector('.footer');
let avatar = document.querySelector('#avatar');
let email = document.querySelector('#email');
let city = document.querySelector('#city');
let username = document.querySelector('#username');

btn.addEventListener("click", function() {
	fetch(url)
		.then(handleErrors)
		.then(parseJson)
		.then(updateProfile)
		.catch(displayErrors)
});

function handleErrors(res) {
	if(!res.ok) {
		throw Error(res.status);
	}
	return res;
}

function parseJson(res) {
	return res.json()
		.then(function(data) {
			return data.results[0];
		})
}

function updateProfile(data) {
	fullNameDisplay.innerText = data.name.first + ' ' + data.name.last;
	email.innerText = data.email;
	city.innerText = data.location.city;
	username.innerText = data.login.username;
	avatar.src = data.picture.medium;
}

function displayErrors(err) {
	alert(err);
}