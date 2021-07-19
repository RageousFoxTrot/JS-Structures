// Import stylesheets
import './style.css';

// Write Javascript code!
const $root = document.getElementById('data');

function BetterStack() {
	const collection = [];

	this.has = function(elem) {
		return collection.indexOf(elem) !== -1;
	};
}

$root.innerHTML = `<h1>JS Starter</h1>`;