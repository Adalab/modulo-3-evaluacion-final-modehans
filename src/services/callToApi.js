const callToApi = (userValue) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/${userValue}`)
    .then((response) => response.json())
    .then((response) => {
      const data = response.map((item, index) => {
        let newImage = `https://via.placeholder.com/256x256/816f9f/000000/?text=${item.name}`;
        return {
          id: index,
          image: item.image === '' ? newImage : item.image,
          name: item.name,
          house: item.house,
          alive: item.alive,
          gender: item.gender,
          species: item.species,
          alternate_names: item.alternate_names,
        };
      });
      return data;
    });
};

export default callToApi;
