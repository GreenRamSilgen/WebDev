const body = document.querySelector('body');

//red <p>text</p> 
const myP = document.createElement('p');
myP.textContent = "Hey I'm red!";
myP.style.color = 'red';
body.appendChild(myP);

//blue <h3>text</h3>
const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'Blue';
body.appendChild(blueH3);

//black border, pink background div
const mainDiv = document.createElement('div');

//add h1 and p 

const myH1 = document.createElement('h1');
myH1.textContent = "I'm in a div";

const myDivP = document.createElement('p');
myDivP.textContent = "ME TOO!";

mainDiv.appendChild(myH1);
mainDiv.appendChild(myDivP);

body.appendChild(mainDiv);