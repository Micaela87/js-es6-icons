/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/

// DOM nodes
const formOptions = document.querySelectorAll('select'); // dropdown menu
const iconsContainer = document.querySelector('.container'); // icons' container
let arrFormattedIcons = []; // empty icon HTML elements collection

// data to be displayed
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// displays all icons when loading the page
icons.forEach((icon) => generateIcon(icon));
displayIcons(arrFormattedIcons);
arrFormattedIcons = [];

// adds event on dropdown menu options to filter icons to be displayed
formOptions.forEach(function(n) {
	n.addEventListener('change', function() {
		console.log('you selected me');
		console.log(n);
		if (this.value === 'all') {
			icons.forEach((icon) => generateIcon(icon));
			displayIcons(arrFormattedIcons);
			arrFormattedIcons = [];
		} else {
			const filteredIcons = filterIcons(this.value);
			filteredIcons.forEach((icon) => generateIcon(icon));
			displayIcons(arrFormattedIcons);
			arrFormattedIcons = [];
		}
	});
});

// helper functions

// generates and displays icons
function generateIcon(obj) {
	// creates an HTML string
	const htmlString = `
	<div class='icon-container'>
		<i style='color:${obj.color}' class="${obj.family} ${obj.prefix}${obj.name}"></i>
		<span>${obj.name.toUpperCase()}</span>
	</div>
	`;

	// pushes the string previously created to the general collection above
	arrFormattedIcons.push(htmlString);
}

// displays icons on page
function displayIcons(arr) {
	// turns all the elements of the collection in a single string
	const stringFormattedIcons = arr.join('');

	// prints icons in the collection to the page
	iconsContainer.innerHTML = stringFormattedIcons;
}

// filters icons by type
function filterIcons(type) {
	const filteredIcons = icons.filter((icon) => icon.type === type);

	return filteredIcons;
}