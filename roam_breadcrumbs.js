//#recentLinks div to hold breadcrumbs
var breadCrumbDiv = document.createElement('div'); // #recentLinks div to hold breadcrumbs
breadCrumbDiv.id = 'recentLinks';
document.body.appendChild(breadCrumbDiv);
window.addEventListener("hashchange", timedFunction);

//div + button to stop/start listener, & show/hide breadcrumbs
var toggleDiv = document.createElement('div');
toggleDiv.id = 'closeCrumbs';
document.body.appendChild(toggleDiv);

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
      	btn.style.color = 'red';
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
    if (urlArray.slice(0, 5).includes(pageUrl) == false) { //slice keeps the list to 5 links, increase slice size if you wish
        urlArray.unshift(pageUrl);
        var result = "<a href='" + pageUrl + "' class='recentLink'>" + children.innerHTML.substring(0, 25) + "</a>"; //adds <a> element to array, maximum 25 chars, increase substring size if you wish
        linksArray.unshift(result);
        breadCrumbDiv.innerHTML = linksArray.slice(0, 5); //puts the <a> array into the breadCrumbDiv
    }
}