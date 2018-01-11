import { House } from './../js/api-call.js';

$(document).ready(function () {
  const ourHouse = new House();
  document.addEventListener('click', function(event) {
    if (event.target.id === 'show-stark'){
      showHouseMembers( ourHouse,`House Stark of Winterfell`);
    } else if (event.target.id === 'show-lannister'){
      showHouseMembers( ourHouse,`House Lannister of Casterly Rock`);
    } else if (event.target.id === 'show-baratheon'){
      showHouseMembers( ourHouse,`House Baratheon of Storm's End`);
    } else if (event.target.id === 'show-greyjoy'){
      showHouseMembers( ourHouse,`House Greyjoy of Pyke`);
    } else if (event.target.id === 'show-targaryen'){
      showHouseMembers( ourHouse,`House Targaryen of King's Landing`);
    }
  });
});

function renderCallback(characterArray){
  console.log(characterArray);
  characterArray.forEach((character) => {
    $('.house-members').append(`<li>${character.name}</li>`);
  });
}

function showHouseMembers(houseObject, housename){
  $('.house-members').empty();
  houseObject.getHouse(housename, renderCallback);
}
