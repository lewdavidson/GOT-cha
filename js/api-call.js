
export function getHouse( houseName, renderCallback){
  const url = `https://www.anapioficeandfire.com/api/house`;
  const houseQuery = `?${houseName}`;
  $.get( url + houseQuery )
    .then(function(results) {
      const charLinks = results.swornMembers;
      const output = [];
      charLinks.forEach((link) => {
        query api for character object
        push object to character array

      });
      renderCallback(output);
    });
    .fail(function(){

    });
}

export function getCharacter(charName, renderCallback){
  const url = `https://www.anapioficeandfire.com/api/character`;
  const charQuery = `?${charName}`
