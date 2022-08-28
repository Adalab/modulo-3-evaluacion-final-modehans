import { Link } from 'react-router-dom';

import '../styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const colorOfHouse = props.character.house.toLowerCase();
  console.log(colorOfHouse);
  return (
    <section className="sectionCardDetail">
      <Link to={'/'} className="sectionCardDetail__link">
        Volver
      </Link>
      <article className={`cardDetail ${colorOfHouse}`}>
        <img
          className="cardDetail__img"
          src={props.character.image}
          alt={`Foto de ${props.character.image}`}
          title={`Foto de ${props.character.image}`}
        />

        <section>
          <h2 className="cardDetail__title">{props.character.name}</h2>
          <p className="cardDetail__description">{`Casa: ${props.character.house}`}</p>
          <p className="cardDetail__description">{`Estatus: ${
            props.character.alive ? 'Viva ♥' : 'Muerta ☠'
          }`}</p>
          <p className="cardDetail__description">{`Género: ${props.character.gender}`}</p>
          <p className="cardDetail__description">{`Especie: ${props.character.species}`}</p>
          <p className="cardDetail__description">{`Nombres alternativos: ${props.character.alternative_names}`}</p>
        </section>
      </article>
    </section>
  );
};

export default CharacterDetail;
