import CharacterCard from './CharacterCard';

import '../styles/components/CharactersList.scss';

const CharactersList = (props) => {
  const renderCharacters = props.dataCharacters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return <ul className="cardsList">{renderCharacters}</ul>;
};

export default CharactersList;
