import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';

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
    console.log('useEffect1');
    setIsLoading(true);
    if (sessionStorage.getItem(userFilterHouse) !== null) {
      setDataCharacters(JSON.parse(sessionStorage.getItem(userFilterHouse)));
      setIsLoading(false);
    } else {
      callToApi(userFilterHouse).then((dataApi) => {
        setDataCharacters(dataApi);
        sessionStorage.setItem(userFilterHouse, JSON.stringify(dataApi));
        setIsLoading(false);
        console.log('fetch 1');
      });
    }
  }, [userFilterHouse]);

  const handleFilterName = (inputValue) => {
    console.log('Name');
    setUserFilterName(inputValue);
  };

  const handleFilterHouse = (inputValue) => {
    console.log('House');
    setUserFilterHouse(inputValue);
  };

  const dataUser = dataCharacters

    .filter((item) => {
      console.log('Filtrado');
      return item.name
        .toLowerCase()
        .includes(userFilterName.toLocaleLowerCase());
    })
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

  const renderLoadOrCharacters = isLoading ? (
    <Loader />
  ) : (
    <CharactersList dataCharacters={dataUser} />
  );
  /*
  const { pathname } = useLocation();
  console.log(pathname);

  const characterSelect = () => {
    const dataPath = matchPath('/characterDetail/:id', pathname);
    console.log(dataPath);
    const characterId = dataPath !== null ? dataPath.params.id : null;
    return dataCharacters.find((item) => item.id === parseInt(characterId));
  };
*/
  const findCharacter = (characterId) => {
    console.log('Encontrado');
    return dataCharacters.find((item) => item.id === parseInt(characterId));
  };

  //console.log('Select', characterSelect);

  return (
    <div className="container">
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
            element={
              <CharacterDetail
                findCharacter={
                  findCharacter
                } /* selectCharacter={characterSelect} */
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
