import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import callToApi from '../services/callToApi';
import localStorage from '../services/localStorage';

import Header from './Header';
import CharactersList from './CharactersList';
import Filters from './Filters';
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

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Filters
                userFilterName={userFilterName}
                handleFilterName={handleFilterName}
                userFilterHouse={userFilterHouse}
                handleFilterHouse={handleFilterHouse}
              />
              {renderLoadOrCharacters}
            </main>
          }
        />

        <Route
          path="/characterDetail"
          element={
            <main>
              <Link to="/">Volver</Link>
              <div>Character Detail </div>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
