import { House } from './../js/api-call.js';

$(document).ready(function () {
  const ourHouse = new House();
  document.addEventListener('click', function(event) {
    if (event.target.id === 'show-stark'){
      showHouseMembers( ourHouse,`House Stark of Winterfell`);
      console.log(ourHouse.members);
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
  $('.house-members').on('click', function(event) {
    let name = $(event.target).text();
    let thisChar = ourHouse.members.find((character) => character.name === name);
    console.log(thisChar.name);
    showCharacter(thisChar);
  });
});

function renderCharacterName(characterObject){
  $('.house-members').append(`<li>${characterObject.name}</li>`);
}

function showHouseMembers(houseObject, housename){
  $('.house-members').empty();
  houseObject.getHouse(housename, renderCharacterName);
}

function showCharacter(character){
  $('.character-info').show();
  $('.name').text(character.name);
  $('.titles').text(character.titles);
  $('.aliases').text(character.aliases);
}
