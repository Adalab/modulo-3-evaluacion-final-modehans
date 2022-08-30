import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import getCharactersHouseToApi from '../services/getCharactersHouseToApi';
import sessionStorage from '../services/sessionStorage';

import Header from './Header';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import ShowFiltersResults from './ShowFiltersResults';

const App = () => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [userNameFilter, setUserNameFilter] = useState('');
  const [userHouseFilter, setUserHouseFilter] = useState('house/gryffindor');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect1');
    setIsLoading(true);
    if (sessionStorage.get(userHouseFilter) !== null) {
      setDataCharacters(JSON.parse(sessionStorage.get(userHouseFilter)));
      setIsLoading(false);
    } else {
      getCharactersHouseToApi(userHouseFilter).then((dataApi) => {
        setDataCharacters(dataApi);
        sessionStorage.set(userHouseFilter, dataApi);
        setIsLoading(false);
        console.log('fetch 1');
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
                <ShowFiltersResults isLoading={isLoading} dataUser={dataUser} />
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
