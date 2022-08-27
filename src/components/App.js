import '../styles/layout/App.scss';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <section> Filter</section>
        <ul>
          {' '}
          Character List
          <li>Character Card</li>
        </ul>
      </main>
    </>
  );
};

export default App;
