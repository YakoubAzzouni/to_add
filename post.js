function testConnectionPost() {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://51.91.21.28/__init__.py');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function () {
		if (xhr.status === 200) {
			console.log(xhr.response);
		} else {
			console.log("error :" + xhr.status)
		}
	}
	xhr.send(encodeURIObject({
		action: 'testPost',
		api_key: '4s5f45654gf8sdKd6ffs5s64dfnIOsd6',
		}));
}

function encodeURIObject(data) {
	let keys = Object.keys(data);
	let response ='';
	for (let key of keys) {
		response += key + '=' + data[key] + '&';
		}
	return encodeURI(response.slice(0, -1)); // pour enlever le dernier &
}