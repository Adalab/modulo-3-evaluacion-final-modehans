import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import callToApi from '../services/callToApi';

import Header from './Header';
import Filters from './Filters';
import CharactersList from './CharactersList';
import CharacterDetail from './CharacterDetail';
import Loader from './Loader';

const App = () => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [userNameFilter, setUserNameFilter] = useState('');
  const [userHouseFilter, setUserHouseFilter] = useState('house/gryffindor');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (sessionStorage.getItem(userHouseFilter) !== null) {
      setDataCharacters(JSON.parse(sessionStorage.getItem(userHouseFilter)));
      setIsLoading(false);
    } else {
      callToApi(userHouseFilter).then((dataApi) => {
        setDataCharacters(dataApi);
        sessionStorage.setItem(userHouseFilter, JSON.stringify(dataApi));
        setIsLoading(false);
      });
    }
  }, [userHouseFilter]);

  const handleNameFilter = (inputValue) => {
    setUserNameFilter(inputValue);
  };

  const handleHouseFilter = (inputValue) => {
    setUserHouseFilter(inputValue);
  };

  const dataUser = dataCharacters

    .filter((item) => {
      return item.name
        .toLowerCase()
        .includes(userNameFilter.toLocaleLowerCase());
    })
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  const renderLoadOrCharacters = isLoading ? (
    <Loader />
  ) : (
    <CharactersList dataCharacters={dataUser} />
  );

  const findCharacter = (characterId) => {
    return dataCharacters.find((item) => item.id === parseInt(characterId));
  };

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  userNameFilter={userNameFilter}
                  handleNameFilter={handleNameFilter}
                  userHouseFilter={userHouseFilter}
                  handleHouseFilter={handleHouseFilter}
                />
                {renderLoadOrCharacters}
              </>
            }
          />

          <Route
            path="/characterDetail/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
