import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import callToApi from '../services/callToApi';
import localStorage from '../services/localStorage';

import Header from './Header';
import CharactersList from './CharactersList';
import Filters from './Filters';

const App = () => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [userFilterName, setUserFilterName] = useState('');
  const [userFilterHouse, setUserFilterHouse] = useState('house/gryffindor');

  useEffect(() => {
    callToApi(userFilterHouse).then((dataApi) => {
      setDataCharacters(dataApi);
    });
  }, [dataCharacters]);

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
              <CharactersList dataCharacters={dataUser} />
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
