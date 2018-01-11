export class House{
  constructor(){
    this.members = [];
  }

  getHouse( houseName, renderCallback){
    const url = `https://www.anapioficeandfire.com/api/houses?`;
    const houseQuery = `name=${houseName}`;
    $.get( url + houseQuery )
      .then((result) => {
        console.log('successful house query!');
        const charLinks = result[0].swornMembers;
        charLinks.forEach((link) => {
          this.getCharacter(link, renderCallback);
        });
      })
      .fail(function(){
          console.log('House query failure!');
      });
  }

  getCharacter(charLink, renderCharacterName){
    const url = charLink;

    $.get( url )
      .then((result) => {
        const character = result;
        this.members.push(character);
        renderCharacterName(character);
      })
      .fail(() => {
        console.log('Character query failure');
        const failObj = {"name": "character not found"};
        renderCharacterName(failObj);
      });
  }

}



// getHouse( houseName, renderCallback){
//   const url = `https://www.anapioficeandfire.com/api/houses?`;
//   const houseQuery = `name=${houseName}`;
//   $.ajax({
//     url: url + houseQuery,
//     type: 'GET',
//     data: {
//       format: 'json'
//     },
//     success: (results) => {
//       console.log('successful house query!');
//       const charLinks = results[0].swornMembers;
//       const outputArray = [];
//       charLinks.forEach((link) => {
//         let character = this.getCharacter(link);
//         console.log(character);
//         outputArray.push(character);
//       });
//       renderCallback(outputArray);
//     },
//     error: function() {
//         console.log('House query failure!');
//     }
//   });
// }
