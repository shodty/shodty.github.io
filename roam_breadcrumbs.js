//#recentLinks div to hold breadcrumbs
var breadCrumbDiv = document.createElement('div'); // #recentLinks div to hold breadcrumbs
breadCrumbDiv.id = 'recentLinks';
var topBarDiv = document.getElementsByClassName("roam-topbar")[0];
topBarDiv.appendChild(breadCrumbDiv); //put it in the topbar div for z-index purposes
window.addEventListener("hashchange", timedFunction);

//div + button to stop/start listener, & show/hide breadcrumbs
var toggleDiv = document.createElement('div');
toggleDiv.id = 'closeCrumbs';
topBarDiv.appendChild(toggleDiv);

var toggleButton = document.createElement("button");
toggleButton.id = 'buttonLayer';
toggleButton.innerHTML = "‣";
toggleDiv.appendChild(toggleButton);
toggleButton.onclick = turnOnOff;

var urlArray = [];
var linksArray = [];
var onOff = true;

//this function flips the toggle switch, then shows/hides the breadcrumbs and adds/removes listener
function turnOnOff() {
    onOff = !onOff;
  	var elem = document.querySelector('#recentLinks');
  	var btn = document.querySelector('#buttonLayer');
    if (!onOff) {
        elem.style.display = 'none';
      	btn.style.color = 'grey';
      	window.removeEventListener("hashchange", timedFunction);
    } else {
        elem.style.display = 'block';
      	btn.style.color = 'green';
      	window.addEventListener("hashchange", timedFunction);
    }
}

//had to delay function for adding breadcrumbs to give page time to load
function timedFunction() {
    setTimeout(addPageToRecent, 150)
}

function addPageToRecent() {
    var parent = document.getElementsByClassName("rm-title-display")[0]; //snags the page title
    var children = parent.children[0]; 
    var pageUrl = window.location.href; //snags the url for said page
    if (urlArray.slice(0, 5).includes(pageUrl) == false) { //checks if the link already exists in the last 5 links
        urlArray.unshift(pageUrl);
        var result = "<a href='" + pageUrl + "' class='recentLink'>" + children.innerHTML.substring(0, 25) + "</a>"; //adds <a> element to array, maximum 25 chars, increase substring size if you wish
        linksArray.unshift(result);
        linksArray = linksArray.slice(0, 5); //reduces the array to to 5 link max, in crease if you wish
        breadCrumbDiv.innerHTML = linksArray; //puts the <a> array into the breadCrumbDiv
    }
}