import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';
const CharacterCard = (props) => {
  return (
    <li className="card">
      <Link
        to={`/characterDetail/${props.character.house}/${props.character.id}`}
      >
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.image}`}
          title={`Foto de ${props.character.image}`}
        />
        <h2 className="card__title">{props.character.name}</h2>
        <p className="card__description">{props.character.species}</p>
        <p className="card__description">{props.character.house}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
