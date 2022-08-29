import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';

import callToApi from '../services/callToApi';
import localStorage from '../services/localStorage';

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
    callToApi(userFilterHouse).then((dataApi) => {
      setDataCharacters(dataApi);
      setIsLoading(false);
    });
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
