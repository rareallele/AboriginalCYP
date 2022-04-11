function setIframe() {
  let selected = document.getElementById("fig_select");
  let selectionID = selected.options[selected.selectedIndex].id;
  let selection = document.getElementById("fig_select").value;
  document.getElementById("figure-display").src = selection;
  buttons = document.querySelector('#buttonBlock');
  var subButtons = document.querySelectorAll("button.sub-button");
  var p1 = document.getElementById('p1');
  var p2 = document.getElementById('p2');
  var p3 = document.getElementById('p3');

  switch(selectionID) {
    case 'figure1':
      buttons.style.display = 'flex';
      subButtons[0].value = "Figures\\yearly_deaths.html";
      subButtons[0].innerHTML = "All deaths";
      subButtons[1].value = "Figures\\yearly_deaths_residents.html";
      subButtons[1].innerHTML = "SA Residents";
      subButtons.forEach(function(button) {
        button.classList.remove('activeButton')
      });
      document.querySelector('button.sub-button').classList.add('activeButton');
      p1.classList.remove('hidden');
      p2.classList.remove('hidden');
      p3.classList.add('hidden');
      break;
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
      p1.classList.add('hidden');
      p2.classList.add('hidden');
      p3.classList.remove('hidden');
      break;
      case 'figure3':
        buttons.style.display = 'flex';
        subButtons[0].value = "Figures\\regions_map_number.html";
        subButtons[0].innerHTML = "Number of deaths";
        subButtons[1].value = "Figures\\regions_map_rates.html";
        subButtons[1].innerHTML = "Death rate";
        subButtons.forEach(function(button) {
          button.classList.remove('activeButton')
        });
        document.querySelector('button.sub-button').classList.add('activeButton');
        p1.classList.add('hidden');
        p2.classList.add('hidden');
        p3.classList.add('hidden');
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
      p1.classList.add('hidden');
      p2.classList.add('hidden');
      p3.classList.add('hidden');
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

