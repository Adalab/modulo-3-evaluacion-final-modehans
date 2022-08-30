import Loader from './Loader';
import CharactersList from './CharactersList';

const ShowFiltersResults = (props) => {
  const renderLoadOrCharacters = props.isLoading ? (
    <Loader />
  ) : (
    <CharactersList dataCharacters={props.dataUser} />
  );

  return <>{renderLoadOrCharacters}</>;
};
export default ShowFiltersResults;
