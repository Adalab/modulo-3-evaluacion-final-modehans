import { Link } from 'react-router-dom';

import '../styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const colorOfHouse = props.character.house.toLowerCase();
  console.log(colorOfHouse);
  return (
    <section className="section">
      <Link to={'/'}>Volver</Link>
      <article className={`cardDetail ${colorOfHouse}`}>
        <img
          className="cardDetail__img"
          src={props.character.image}
          alt={`Foto de ${props.character.image}`}
          title={`Foto de ${props.character.image}`}
        />
        <h2 className="cardDetail__title">{props.character.name}</h2>
        <p className="cardDetail__description">{props.character.house}</p>
        <p className="cardDetail__description">{props.character.alive}</p>
        <p className="cardDetail__description">{props.character.genere}</p>
        <p className="cardDetail__description">{props.character.species}</p>
        <p className="cardDetail__description">
          {props.character.alternative_names}
        </p>{' '}
      </article>
    </section>
  );
};

export default CharacterDetail;
