import { Link } from 'react-router-dom';
import '../styles/components/NoExist.scss';
const NoExist = (props) => {
  return (
    <section className="error">
      {props.children}
      <Link className="link" to={'/'}>
        Pulsa aquí para volver a página principal
      </Link>
    </section>
  );
};
export default NoExist;
