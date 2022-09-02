const NamesAlternariveFilter = (props) => {
  const handleChangeInput = (ev) => {
    props.handleAlternativeNamesFilter(ev.target.value);
  };

  return (
    <div>
      <label className="formFilter__label" htmlFor="nameAlternative">
        Filtrar por nombre:
      </label>
      <input
        className="formFilter__input"
        type="number"
        name="nameAlternative"
        id="nameAlternative"
        value={props.userNumberAternativeNames}
        onChange={handleChangeInput}
      ></input>
    </div>
  );
};
export default NamesAlternariveFilter;
