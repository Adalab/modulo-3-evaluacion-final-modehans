import newImage from '../images/HogwartsHouses.png';
const callToApi = (userValue) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/${userValue}`)
    .then((response) => response.json())
    .then((response) => {
      const data = response.map((item, index) => {
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
