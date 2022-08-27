import CharacterCard from './CharacterCard';
import '../styles/components/CharactersList.scss';

const CharactersList = (props) => {
  const characters = props.dataCharacters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return <ul className="cards">{characters}</ul>;
};

export default CharactersList;
