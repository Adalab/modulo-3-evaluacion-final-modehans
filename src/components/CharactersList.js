import CharacterCard from './CharacterCard';

import '../styles/components/CharactersList.scss';

const CharactersList = (props) => {
  'render', props.dataCharacters;
  if (props.dataCharacters.length === 0) {
    return <p>Personaje {props.userNameFilter} No Existe</p>;
  } else {
    const renderCharacters = props.dataCharacters.map((character) => {
      return <CharacterCard character={character} key={character.id} />;
    });

    return <ul className="cardsList">{renderCharacters}</ul>;
  }
};

export default CharactersList;
