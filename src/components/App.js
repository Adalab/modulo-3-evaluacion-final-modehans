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
  const [userFilterName, setUserFilterName] = useState('');
  const [userFilterHouse, setUserFilterHouse] = useState('house/gryffindor');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (sessionStorage.getItem(userFilterHouse) !== null) {
      setDataCharacters(JSON.parse(sessionStorage.getItem(userFilterHouse)));
      setIsLoading(false);
    } else {
      callToApi(userFilterHouse).then((dataApi) => {
        setDataCharacters(dataApi);
        sessionStorage.setItem(userFilterHouse, JSON.stringify(dataApi));
        setIsLoading(false);
      });
    }
  }, [userFilterHouse]);

  const handleFilterName = (inputValue) => {
    setUserFilterName(inputValue);
  };

  const handleFilterHouse = (inputValue) => {
    setUserFilterHouse(inputValue);
  };

  const dataUser = dataCharacters

    .filter((item) => {
      return item.name
        .toLowerCase()
        .includes(userFilterName.toLocaleLowerCase());
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
                  userFilterName={userFilterName}
                  handleFilterName={handleFilterName}
                  userFilterHouse={userFilterHouse}
                  handleFilterHouse={handleFilterHouse}
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
