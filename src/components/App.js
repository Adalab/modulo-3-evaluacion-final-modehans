import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import callToApi from '../services/callToApi';
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
            <main>
              <section>Filters</section>
              <ul>
                Character List
                <li>
                  <Link to="/characterDetail">Character Card </Link>
                </li>
              </ul>
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
