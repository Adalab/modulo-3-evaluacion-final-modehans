import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import getCharactersHouseToApi from '../services/getCharactersHouseToApi';
import sessionStorage from '../services/sessionStorage';

import Header from './Header';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharactersList from './CharactersList';
import ShowLoading from './ShowLoading';

import InvalidRoute from './InvalidRoute';

const App = () => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [userNameFilter, setUserNameFilter] = useState('');
  const [userHouseFilter, setUserHouseFilter] = useState('house/gryffindor');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (sessionStorage.get(userHouseFilter) !== null) {
      setDataCharacters(JSON.parse(sessionStorage.get(userHouseFilter)));
      setIsLoading(false);
    } else {
      getCharactersHouseToApi(userHouseFilter).then((dataApi) => {
        setDataCharacters(dataApi);
        sessionStorage.set(userHouseFilter, dataApi);
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

  const findCharacter = (characterId, characterHouse) => {
    if (characterHouse === 'Sin casa') {
      setUserHouseFilter('');
    } else if (characterHouse !== 'Griffindor') {
      setUserHouseFilter(`house/${characterHouse}`);
    }
    return dataCharacters.find((item) => item.id === characterId);
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
                <ShowLoading isLoading={isLoading}>
                  <CharactersList dataCharacters={dataUser} />
                </ShowLoading>
              </>
            }
          />

          <Route
            path="/characterDetail/:house/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
