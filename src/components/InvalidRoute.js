import { Link } from 'react-router-dom';

const InvalidRoute = () => {
  return (
    <>
      <p className="error">Ruta no valida</p>
      <Link to={'/'} className="error">
        Pulsa aquí para volver a página principal
      </Link>
    </>
  );
};
export default InvalidRoute;
