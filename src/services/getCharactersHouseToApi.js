import newImage from '../images/HogwartsHouses.png';

const getCharactersHouseToApi = (userValue) => {
  return fetch(`https://hp-api.herokuapp.com/api/characters/${userValue}`)
    .then((response) => response.json())
    .then((response) => {
      const data = response.map((item, index) => {
        return {
          id: `${item.name.toLowerCase().replace(' ', '-')}-${index}`,
          image: item.image === '' ? newImage : item.image,
          name: item.name,
          house: item.house === '' ? 'Sin casa' : item.house,
          alive: item.alive,
          gender: item.gender,
          species: item.species,
          alternate_names: item.alternate_names.join('-'),
        };
      });
      return data;
    });
};

export default getCharactersHouseToApi;
