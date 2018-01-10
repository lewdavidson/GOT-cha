import { getHouse, getCharacter } from './../js/api-call.js';

$(document).ready(function () {
  document.addEventListener('click', function(event) {
    if (event.target.id === 'show-stark'){
      showHouseMembers(`House Stark of Winterfell`);
    } else if (event.target.id === 'show-lannister'){
      showHouseMembers(`House Lannister of Casterly Rock`);
    } else if (event.target.id === 'show-baratheon'){
      showHouseMembers(`House Baratheon of Storm's End`);
    } else if (event.target.id === 'show-greyjoy'){
      showHouseMembers(`House Greyjoy of Pyke`);
    } else if (event.target.id === 'show-targaryen'){
      showHouseMembers(`House Targaryen of King's Landing`);
    }
  });
});

function renderCallback(characterArray){
  characterArray.forEach((character) => {
    $('.house-members').append(`<li>${character.name}</li>`);
  });
}

function showHouseMembers(housename){
  $('.house-members').empty();
  getHouse(housename, renderCallback);
};
