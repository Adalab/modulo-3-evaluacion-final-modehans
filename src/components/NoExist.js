import { Link } from 'react-router-dom';

const NoExist = () => {
  return (
    <>
      <p className="error">{`Personaje No Encontrado`}</p>
      <Link to={'/'} className="error">
        Pulsa aquí para volver a página principal
      </Link>
    </>
  );
};
export default NoExist;
