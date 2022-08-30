const NoExist = (props) => {
  return (
    <>
      <p className="error">{`Personaje ${props.children} No Encontrado`}</p>
      <a href="/" className="error">
        Pulsa aquí para volver a página principal
      </a>
    </>
  );
};

export default NoExist;
