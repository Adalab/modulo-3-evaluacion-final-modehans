import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import callToApi from '../services/callToApi';
import CharactersList from './CharactersList';
const App = () => {
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((dataApi) => {
      setDataCharacters(dataApi);
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <section>Filters</section>
              <CharactersList dataCharacters={dataCharacters} />
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
