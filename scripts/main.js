const myImage = document.querySelector("img");

myImage.onclick = () => {

  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
    myHeading.textContent = `Is Brave even cooler?`;
    changeColourWhite();

  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
    changeColourOrange()
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

function changeColourWhite(){
  document.body.style.backgroundColor = 'white';
}
function changeColourOrange(){
  document.body.style.backgroundColor = '#FF9500';
}

