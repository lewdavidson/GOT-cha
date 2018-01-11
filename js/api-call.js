export class House{
  constructor(){
    this.members = [];
  }

  getHouse( houseName, renderCallback){
    const url = `https://www.anapioficeandfire.com/api/houses?`;
    const houseQuery = `name=${houseName}`;
    $.get( url + houseQuery )
      .then((results) => {
        console.log('successful house query!');
        const charLinks = results[0].swornMembers;
        const outputArray = charLinks;
        // charLinks.forEach((link) => {
        //   // query api for character object
        //   // push object to character array
        //
        // });
        renderCallback(outputArray);
      })
      .fail(function(){
        console.log('House query failure!');
      });
  }

  //function getCharacter(charName, renderCallback){
  //   const url = `https://www.anapioficeandfire.com/api/character`;
  //   const charQuery = `?${charName}`

}
