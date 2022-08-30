const NameFilter = (props) => {
  const handleChangeInput = (ev) => {
    props.handleNameFilter(ev.target.value);
  };

  return (
    <div>
      <label className="formFilter__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="formFilter__input"
        type="text"
        name="name"
        id="name"
        placeholder="Escribe un nombre"
        value={props.userNameFilter}
        onChange={handleChangeInput}
      ></input>
    </div>
  );
};

export default NameFilter;
