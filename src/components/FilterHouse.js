const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilterHouse(ev.currentTarget.value);
  };
  return (
    <div>
      <label className="formFilter__label" htmlFor="house">
        Selecciona la casa:
      </label>
      <select
        className="formFilter__select"
        name="house"
        id="house"
        value={props.userFilterHouse}
        onChange={handleChange}
        required
      >
        <option value="">Todas</option>
        <option value="house/gryffindor">Gryffindor</option>
        <option value="house/Slytherin">Slytherin</option>
        <option value="house/Hufflepuff">Hufflepuff</option>
        <option value="house/Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
};
export default FilterHouse;
