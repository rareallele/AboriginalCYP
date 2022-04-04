function setIframe() {
  let selected = document.getElementById("fig_select");
  let selectionID = selected.options[selected.selectedIndex].id;
  let selection = document.getElementById("fig_select").value;
  document.getElementById("figure-display").src = selection;
  buttons = document.querySelector('#buttonBlock');
  var subButtons = document.querySelectorAll("button.sub-button");
  switch(selectionID) {
    case 'figure2':
      buttons.style.display = 'flex';
      subButtons[0].value = "Figures\\rates_seifa.html";
      subButtons[0].innerHTML = "All deaths";
      subButtons[1].value = "Figures\\rates_seifa_residents.html";
      subButtons[1].innerHTML = "SA Residents";
      subButtons.forEach(function(button) {
        button.classList.remove('activeButton')
      });
      document.querySelector('button.sub-button').classList.add('activeButton');
      break;
    case 'figure4':
      buttons.style.display = 'flex';
      subButtons[0].value = "Figures\\cod_age_atsi.html";
      subButtons[0].innerHTML = "Aboriginal CYP";
      subButtons[1].value = "Figures\\cod_age.html";
      subButtons[1].innerHTML = "Non-Aboriginal CYP";
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

