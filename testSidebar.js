const sidebarPress = new KeyboardEvent("keydown", {
    bubbles: true, cancelable: true, keyCode: 220, ctrlKey: true, shiftKey: true
  });
  
/* const sidebarPressMac = new KeyboardEvent("keydown", {
  bubbles: true, cancelable: true, keyCode: 220, metaKey: true, shiftKey: true
}); */


  setTimeout(createButton, 200);
  
  function createButton() {
    var spanOne = document.createElement('span');
    spanOne.classList.add('bp3-popover-wrapper');
    var spanTwo = document.createElement('span');
    spanTwo.classList.add('bp3-popover-target');
    spanOne.appendChild(spanTwo);
    var toggleSideBar = document.createElement('span');
    toggleSideBar.id = 'sideBarDiv';
    toggleSideBar.classList.add('bp3-icon-menu', 'bp3-button', 'bp3-minimal');
    spanTwo.appendChild(toggleSideBar);
    var roamTopbar = document.getElementsByClassName("roam-topbar");
    roamTopbar[0].childNodes[0].appendChild(spanOne);
    toggleSideBar.onclick = toggleTheSideBar;
  }
  
  function toggleTheSideBar() {
      document.activeElement.dispatchEvent(sidebarPress);
      /*document.activeElement.dispatchEvent(sidebarPressMac);*/
  }