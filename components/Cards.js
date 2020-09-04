// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
// Declare Code //
function cardMaker(obj) {
	const card = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgcontainer = document.createElement('div');
	const img = document.createElement('img');
	const byline = document.createElement('span');
	
	// Add Attributes //
	card.setAttribute('class', 'card');
	headline.setAttribute('class', 'headline');
	author.setAttribute('class', 'author');
	imgcontainer.setAttribute('class', 'img-container');
	
	// Set Text Content //
	headline.textContent = obj['headline'];
	author.textContent = obj['authorName'];
	img.setAttribute('src', obj['authorPhoto']);

	// Add Event Listener //
	card.addEventListener('click', (event) => {
		const text = event.target.children[0].textContent;
		console.log(text);
	});

	// Append To Parent Card Element //
	card.append(headline);
	card.append(author);
	card.append(byline);
	imgcontainer.append(img);
	author.append(imgcontainer);
	return card;
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then( response => {
	response.data.articles.javascript.forEach(element => {
		const cardscontainer = document.querySelector('.cards-container');
		const newcard = cardMaker(element);
		newcard.setAttribute('class', 'card');
		cardscontainer.append(newcard);
	});
	response.data.articles.bootstrap.forEach(element => {
		const cardscontainer = document.querySelector('.cards-container');
		const newcard = cardMaker(element);
		newcard.setAttribute('class', 'card');
		cardscontainer.append(newcard);
	});
	response.data.articles.technology.forEach(element => {
		const cardscontainer = document.querySelector('.cards-container');
		const newcard = cardMaker(element);
		newcard.setAttribute('class', 'card');
		cardscontainer.append(newcard);
	});
	response.data.articles.jquery.forEach(element => {
		const cardscontainer = document.querySelector('.cards-container');
		const newcard = cardMaker(element);
		newcard.setAttribute('class', 'card');
		cardscontainer.append(newcard);
	});
	response.data.articles.node.forEach(element => {
		const cardscontainer = document.querySelector('.cards-container');
		const newcard = cardMaker(element);
		newcard.setAttribute('class', 'card');
		cardscontainer.append(newcard);
	});
})
.catch( err => {
	console.log("Error:", err);
});