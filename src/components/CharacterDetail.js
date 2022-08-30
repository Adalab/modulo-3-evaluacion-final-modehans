import { Link, useParams } from 'react-router-dom';

import '../styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { id } = useParams();
  const character = props.findCharacter(id);
  if (character == null) {
    return (
      <>
        <p className="error">Personaje No Encontrado</p>
        <Link to={'/'} className="error">
          Pulsa aquí para volver a página principal
        </Link>
      </>
    );
  }
  const colorOfHouse = character.house.toLowerCase();

  return (
    <>
      <Link to={'/'} className="link">
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
          <p className="cardDetail__description">{`Nombres alternativos: ${character.alternate_names}`}</p>
        </section>
      </article>
    </>
  );
};

export default CharacterDetail;
