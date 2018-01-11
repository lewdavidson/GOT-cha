export class House{
  constructor(){
    this.members = [];
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

  getHouse( houseName, renderCallback){
    const url = `https://www.anapioficeandfire.com/api/houses?`;
    const houseQuery = `name=${houseName}`;
    $.get( url + houseQuery )
      .then((results) => {
        console.log('successful house query!');
        const charLinks = results[0].swornMembers;
        const outputArray = [];
        charLinks.forEach((link) => {
          let character = this.getCharacter(link);
          console.log(character);
          outputArray.push(character);
        });

      })
      .fail(function(){
          console.log('House query failure!');
      });
  }

  getCharacter(charLink){
    const url = charLink;

    $.get( url )
      .then((result) => {
        console.log(result.name);
        const character = result;
        return character;
      })
      .fail(() => {
        console.log('Character query failure');
        return {"name": "character not found"};
      });
  }

}
