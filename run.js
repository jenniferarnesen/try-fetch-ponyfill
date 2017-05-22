const {fetch, Request, Response, Headers} = require('fetch-ponyfill')();

const getMediaElement = () => {
	const myHeaders = new Headers({
		Accept: 'application/vnd.nrk.psapi+json; version=9; ludo-client=true'
	});

	const myInit = { method: 'GET',
        headers: myHeaders
  	};

	const myRequest = new Request('https://psapi.nrk.no/mediaelement/p1_oslo_akershus', myInit);

	return fetch(myRequest)
		.then((response) => {
		  return response.json();
		})
		.catch((e) => {
			console.log('could not retreive data', e);
		});
}

const btnElement = document.getElementById('do-request');
btnElement.addEventListener('click', (e) => {
	console.log('button was actually clicked');
	getMediaElement()
		.then((data) => {
			console.log('data', data);
			const resultBox = document.getElementById('result');
			resultBox.innerHTML = data.playable.parts[0].assets[0].url + '<br>' + data.title;
		});
});
