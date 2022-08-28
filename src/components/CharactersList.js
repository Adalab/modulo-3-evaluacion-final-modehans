import CharacterCard from './CharacterCard';

import '../styles/components/CharactersList.scss';

const CharactersList = (props) => {
  const renderCharacters = props.dataCharacters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return <ul className="cards">{renderCharacters}</ul>;
};

export default CharactersList;
