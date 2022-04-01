function setIframe() {
  let selected = document.getElementById("fig_select");
  let selectionID = selected.options[selected.selectedIndex].id;
  let selection = document.getElementById("fig_select").value;
  document.getElementById("figure-display").src = selection
  buttons = document.querySelector('#buttonBlock')
  switch(selectionID) {
    case 'figure2':
      buttons.style.display = 'flex';
      let subButtons = document.querySelectorAll("button.sub-button");
      subButtons.forEach(function(button) {
        button.classList.remove('activeButton')
      });
      document.querySelector('button.sub-button').classList.add('activeButton');
      break;
    default:
      buttons.style.display = 'none';
  }
}

function subButtonSetIframe(clickedButton) {
    var subButtons = document.querySelectorAll("button.sub-button");
    subButtons.forEach(function(button) {
      button.classList.remove('activeButton')
    });
    clickedButton.classList.add('activeButton');
    document.getElementById("figure-display").src = clickedButton.value;
}

