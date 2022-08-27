import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
const App = () => {
  return (
    <>
      <Header />

      <main>
        <section> Filter</section>
        <ul>
          Character List
          <li>Character Card</li>
        </ul>
      </main>
    </>
  );
};

export default App;
