import '../styles/App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="container">
              <section>Filters</section>
              <ul>
                Character List
                <Link to="/characterDetail">
                  {' '}
                  <li>Character Card</li>
                </Link>
              </ul>
            </main>
          }
        />

        <Route
          path="/characterDetail"
          element={
            <main className="container">
              <Link to="/">Volver</Link>
              <div>Character Detail </div>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
