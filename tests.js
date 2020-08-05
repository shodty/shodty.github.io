$("[data-tag=font-36]").parentNode.style.fontSize = '36px';
$("[data-tag=purple-bg").parentNode.style.backgroundColor = 'rgba(157, 55, 235, 0.55)';

var greens = $$("[data-tag=orange-text]");
   for (each in greens) {
        greens[each].parentNode.style.color = 'orange';
   }
var fonts = $$("[data-tag=font-36]");
   for (each in fonts) {
    fonts[each].parentNode.style.fontSize = '36px';
    fonts[each].parentNode.style.lineHeight = '46px';
   }

var blues = $$("[data-tag=blue-bg");
   for (each in blues) {
    blues[each].parentNode.style.backgroundColor = 'rgba(52, 73, 229, 0.55)';
    blues[each].style.backgroundColor = 'red !important';
}

var monos = $$("[data-tag=monospaced");
   for (each in monos) {
    monos[each].parentNode.style.fontFamily = 'Courier New';
}


document.getElementByClass("roam-app").addEventListener("mouseout", styletext);

function styletext() {
   var x = document.querySelectorAll('[data-tag=font-36]');
   for (let i = 0; i < x.length; i++) {
        x[i].parentNode.style.color = 'orange';
   }
 }


 ///////////////////////////////////
 document.getElementsByClassName("roam-app")[0].addEventListener("keyup", styletext);

 function styletext() {
    var x = document.querySelectorAll('[data-tag=orange]');
    for (let i = 0; i < x.length; i++) {
         x[i].parentNode.style.color = 'orange';
    }
    var x = document.querySelectorAll('[data-tag=font-36]');
    for (let i = 0; i < x.length; i++) {
          x[i].parentNode.style.fontSize = '36px';
          x[i].parentNode.style.lineHeight = '46px';
    }
 
   var x = document.querySelectorAll("[data-tag=blue-bg");
    for (let i = 0; i < x.length; i++) {
       x[i].parentNode.style.backgroundColor = 'rgba(52, 73, 229, 0.55)';
       x[i].style.backgroundColor = 'red !important';
    }
   var x = document.querySelectorAll("[data-tag=monospaced");
    for (let i = 0; i < x.length; i++) {
       x[i].parentNode.style.fontFamily = 'Courier New';
    }
   var x = document.querySelectorAll("[data-tag=didot");
    for (let i = 0; i < x.length; i++) {
       x[i].parentNode.style.fontFamily = 'Didot';
    }
   var x = document.querySelectorAll("[data-tag=red");
    for (let i = 0; i < x.length; i++) {
       x[i].parentNode.style.color = 'rgb(255,0,0)';
    }
     var x = document.querySelectorAll("[data-tag=blue");
    for (let i = 0; i < x.length; i++) {
       x[i].parentNode.style.color = 'blue';
    }
       var x = document.querySelectorAll("[data-tag=green");
    for (let i = 0; i < x.length; i++) {
       x[i].parentNode.style.color = 'green';
    }
  }
  ///////////////////

  var myLayer = document.createElement('div');
  myLayer.id = 'bookingLayer';
  myLayer.style.position = 'absolute';
  myLayer.style.left = '10px';
  myLayer.style.top = '10px';
  myLayer.style.width = '300px';
  myLayer.style.height = '300px';
  myLayer.style.padding = '10px';
  myLayer.style.background = '#00ff00';
  myLayer.innerHTML = 'This is the layer created by the JavaScript.';
  document.body.appendChild(myLayer);


  /////


  var myLayer = document.createElement('div');
  myLayer.id = 'bookingLayer';
  myLayer.style.position = 'absolute';
  myLayer.style.right = '30';
  myLayer.style.bottom = '50px';
  myLayer.style.width = '300px';
  myLayer.style.height = '50px';
  myLayer.style.padding = '10px';
  myLayer.style.background = '#00ff00';
  myLayer.innerHTML = 'This is the layer created by the JavaScript.';
  document.body.appendChild(myLayer);
  var myButton = document.createElement("BUTTON");
  myLayer.id = 'buttonLayer';
  btn.innerHTML = "CLICK ME";  
  myLayer.appendChild(buttonLayer);
  myButton.onclick = destroyBlock;
function destroyBlock() {
  var elem = document.querySelector('#bookingLayer');
	elem.parentNode.removeChild(elem);
}

document.addEventListener("load", addPageToRecent);

function addPageToRecent(){
   var pageUrl = window.location.href;
   alert(pageUrl);
}

V7jluF40C
WAUhUtqEO
nXbi8621g
uM-LEfZXB

var up = document.getElementById('GFG_UP'); 
var down = document.getElementById('GFG_DOWN'); 
up.innerHTML = "Click on the button select the child node.";  
  
function GFG_Fun() { 
    parent = document.getElementById('parent'); 
    children = parent.children[0]; 
    down.innerHTML = "Text of child node is - '"  
            + children.innerHTML + "'"; 
}

parent = document.getElementsByClassName("rm-title-display")[0];
children = parent.children[0]; 
myLayer.innerHTML = children.innerHTML; 

arr.slice(0,5)


function addPageToRecent(){
   var pageUrl = window.location.href;
   var lastNine = pageUrl.substr(pageUrl.length - 9);
 if (document.readyState == "complete") {
    var parent = document.getElementsByClassName("rm-title-display")[0];
   var children = parent.children[0];
     if(recentPagesArray.slice(0,5).includes(children.innerHTML) == false) {
       var a = document.createElement('a');
       a.style.marginRight = '10px';
       var text = document.createTextNode(children.innerHTML);
       a.appendChild(text);
       a.href = pageUrl;
       a.style.color = 'white';
       myLayer.appendChild(a);
       //alert(a);
       recentPagesArray.unshift(pageUrl);
     }
 }

 var result = "<a href='" + pageUrl + "'>"+ children.innerHTML + "</a>";
 arr.unshift(result);

 myLayer.innerHTML = arr.slice(0,5);

}