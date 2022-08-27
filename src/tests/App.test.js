import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test(/* titulo del test debe ser intuitivo */ 'renders "Hola mundo"', () => {
  // Pinta lo que queremos testear
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  // Definimos que queremos verificar
  const divElement = screen.getByText('Hola mundo'); //la función screen me permite comprobar en la pantall si pongo (/Hola Mundo/i) busca el patrón de caracteres, es una expresión regular
  // expect Comprueba si el elemento está y toBeInTheDocument me dice donde
  expect(divElement).toBeInTheDocument();
});
