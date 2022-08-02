initialize();

var graphName = window.roamAlphaAPI.graph.name;
var recentLinksDiv, toggleButton, toggleDiv, topBarDiv;
var urlArray = [];
var linksArray = [];
var crumbsOn = true;

function timedStart() {
    setTimeout(createDivs, 550)
}

/*initialize function removes any residual instances of breadcrumb feature*/
function initialize() {
    window.removeEventListener("keyup", hotKeyEvent);
    var elem = document.querySelector('#recentLinks');
    var btn = document.querySelector('#closeCrumbs');
  	if(elem != null) { elem.parentNode.removeChild(elem); }
    if(btn != null) { btn.parentNode.removeChild(btn); }
    window.addEventListener("keyup", hotKeyEvent);
    window.onhashchange = e => setTimeout(addPageToRecent, 250);
    timedStart();
}

function createDivs() {
    console.log('Roam Breadcrumbs by ✹shodty initialized.')
    //#recentLinks div to hold breadcrumbs
    recentLinksDiv = document.createElement('div');
    recentLinksDiv.id = 'recentLinks';
    recentLinksDiv.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        recentLinksDiv.scrollLeft += evt.deltaY;
    });
    topBarDiv = document.getElementsByClassName("rm-topbar")[0];
    topBarDiv.appendChild(recentLinksDiv); //put it in the topbar div for z-index purposes
    //div + button to stop/start listener, & show/hide breadcrumbs
    toggleDiv = document.createElement('div');
    toggleDiv.id = 'closeCrumbs';
    topBarDiv.appendChild(toggleDiv);

    toggleButton = document.createElement("button");
    toggleButton.id = 'toggleButton';
    toggleButton.innerHTML = "‣";
    toggleDiv.appendChild(toggleButton);
    toggleButton.onclick = toggleCrumbs;
    addPageToRecent();
}

//this function flips the toggle switch, then shows/hides the breadcrumbs and adds/removes listener
function toggleCrumbs() {
    crumbsOn = !crumbsOn;
    if (!crumbsOn) {
        recentLinksDiv.style.display = 'none';
        toggleButton.style.color = 'gray';
    } else {
        recentLinksDiv.style.display = 'block';
        toggleButton.style.color = 'green';
    }
}

async function addPageToRecent() {
    if (crumbsOn) {
        var pageUrl = '/'; //daily notes page
        if (!checkIfDailyNotes()) {
            pageUrl = await getUid(); //page/block uid
        }
        if (urlArray.slice(0, 8).includes(pageUrl) == false) { //checks if the link already exists in the last 5 links
            addLinkElement(pageUrl);
        }
        else {
            var index = urlArray.indexOf(pageUrl);
            urlArray.splice(index, 1);
            linksArray.splice(index, 1);
            addLinkElement(pageUrl);
        }
    }
}

function  addLinkElement(pageUrl) {
    var blockType = checkBlockType(pageUrl).type;
    if (checkIfDailyNotes()) {
        createLinkElement(pageUrl, 0);
    }
    else if (blockType == 'page') {
        createLinkElement(pageUrl, 1);
    }
    else if (blockType == 'block') {
        createLinkElement(pageUrl, 2);
    }
}

function createLinkElement(pageUrl, urlCase) {
    var innerChild, linkElement;
    if (urlCase == 0) { var innerChild = "<span style='color: #FF5E00;'>✹</span> Daily Notes" }
    else if (urlCase == 1) { innerChild = getPageName(pageUrl).substring(0, 25) }
    else if (urlCase == 2) { innerChild = "<span style='color: #0D9BDB;'>🞇</span> " + getPageName(pageUrl).substring(0, 20) }
    //add <span> element to array, maximum 25 chars, increase substring size if you wish
    if (!checkIfDailyNotes()) {
        linkElement = "<a id='" + pageUrl + "'href='javascript:;' class='recentLink' onclick='openLink(event);return false;'>" + innerChild + "</a>";
    }
    else {
        linkElement = "<a id='daily-notes' 'href='javascript:;' class='recentLink' onclick='openDaily();return false;'>" + innerChild + "</a>";
    }
    urlArray.unshift(pageUrl);  
    linksArray.unshift(linkElement);
    //reduces the array to to 15 link max, in crease if you wish
    linksArray = linksArray.slice(0, 15);
    //puts the <a> array into the recentLinksDiv
    recentLinksDiv.innerHTML = linksArray.slice(0, 15).join("‣"); 
    var linkElements = document.getElementsByClassName("recentLink");
    for(i=0; i<linkElements.length; i++){
        var linkNumber = "<span class='linkNumber'>" + i.toString() + "</span>";
        linkElements[i].innerHTML = linkNumber + linkElements[i].innerHTML;
    }
}

function openLink(ev) {
    //open link in right sidebar using Roam API if user ctrl+clicks link
    if (ev.ctrlKey == true) {
        window.roamAlphaAPI.ui.rightSidebar.addWindow({ window: { type: 'outline', 'block-uid': ev.srcElement.id } });
    }
    //open link in main window using Roam API if user clicks link
    else {
        window.roamAlphaAPI.ui.mainWindow.openPage({ page: { uid: ev.srcElement.id } });
    }
}

async function openDaily() {
    await window.roamAlphaAPI.ui.mainWindow.openDailyNotes()
}

function hotKeyEvent(zEvent) {
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "1") { goToLink(1); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "2") { goToLink(2); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "3") { goToLink(3); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "4") { goToLink(4); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "5") { goToLink(5); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "6") { goToLink(6); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "7") { goToLink(7); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "8") { goToLink(8); }
    if ((zEvent.altKey || zEvent.ctrlKey) && zEvent.key === "9") { goToLink(9); }
}

async function goToLink(n) {
    var linkToClick = urlArray[n];
    if (linkToClick == '/') { await window.roamAlphaAPI.ui.mainWindow.openDailyNotes(); }
    else if (linkToClick != null) { window.roamAlphaAPI.ui.mainWindow.openPage({ page: { uid: urlArray[n] } }); }
}

async function getUid() {
    return await window.roamAlphaAPI.ui.mainWindow.getOpenPageOrBlockUid();
}

function getPageName(uid) {
    var name;
    var block = checkBlockType(uid);
    if (block.type == 'page') { name = block.block[":node/title"]; }
    else if (block.type == 'block') { name = block.block[":block/string"] }
    return name;
}

function checkIfDailyNotes() {
    return (graphName == window.location.href.substring(window.location.href.length - graphName.length));
}

function checkBlockType(uid) {
    var block = window.roamAlphaAPI.data.pull("[*]", [":block/uid", uid]);
    if (block.hasOwnProperty(":node/title")) { return { type: 'page', block: block } }
    else if (block.hasOwnProperty(":block/string")) { return { type: 'block', block: block } }
    else return 'shodty error'
}