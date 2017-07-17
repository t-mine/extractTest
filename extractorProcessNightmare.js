const Nightmare = require('nightmare');
//const Nightmare = require('./node_modules/nightmare/lib/nightmare.js');
let nightmare = Nightmare({ show: true });
let targetUrl = process.argv[2];

nightmare
	.goto(targetUrl)
	.evaluate(
		function () {
			return document.title;
		})
	.end()
	.then(
		function (result) {
			console.log(result);
		})
	.catch(function (error) {console.error('Search failed:', error);});
