import '../styles/components/CharactersList.scss';

import CharacterCard from './CharacterCard';
import NoExist from './NoExist';

const CharactersList = (props) => {
  if (props.dataCharacters.length === 0) {
    return <NoExist>{props.userNameFilter}</NoExist>;
  } else {
    const renderCharacters = props.dataCharacters.map((character) => {
      return <CharacterCard character={character} key={character.id} />;
    });

    return <ul className="cardsList">{renderCharacters}</ul>;
  }
};

export default CharactersList;
