import { Link, useParams } from 'react-router-dom';

import '../styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
  //const character = props.selectCharacter();
  const { id } = useParams();
  const character = props.findCharacter(id);
  if (character == null) {
    return <p>No encontrado</p>;
  }
  const colorOfHouse = character.house.toLowerCase();
  console.log(colorOfHouse);
  return (
    <section className="sectionCardDetail">
      <Link to={'/'} className="sectionCardDetail__link">
        Volver
      </Link>
      <article className={`cardDetail ${colorOfHouse}`}>
        <img
          className="cardDetail__img"
          src={character.image}
          alt={`Foto de ${character.image}`}
          title={`Foto de ${character.image}`}
        />

        <section>
          <h2 className="cardDetail__title">{character.name}</h2>
          <p className="cardDetail__description">{`Casa: ${character.house}`}</p>
          <p className="cardDetail__description">{`Estatus: ${
            character.alive ? 'Viva ♥' : 'Muerta ☠'
          }`}</p>
          <p className="cardDetail__description">{`Género: ${character.gender}`}</p>
          <p className="cardDetail__description">{`Especie: ${character.species}`}</p>
          <p className="cardDetail__description">{`Nombres alternativos: ${character.alternative_names}`}</p>
        </section>
      </article>
    </section>
  );
};

export default CharacterDetail;
