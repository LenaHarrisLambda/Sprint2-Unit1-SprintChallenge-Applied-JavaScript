// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
	// Declare Code //
	const headercontainer = document.querySelector('.header-container');
	const header = document.createElement('div');
	const headerdate = document.createElement('span');
	const headerh1 = document.createElement('h1');
	const headertemp = document.createElement('span');
	
	// Set Attributes //
	header.setAttribute('class', 'header');
	headerdate.setAttribute('class', 'date');
	headertemp.setAttribute('class', 'temp');

	// Append To Parent Header Element //
	header.append(headerdate);
	header.append(headerh1);
	header.append(headertemp);

	// Append To Header Container Element //
	headercontainer.append(header);
}

Header();