import '../styles/components/Filters.scss';
import NameFilter from './NameFilter';
import HouseFilter from './HouseFilter';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="formFilter" onSubmit={handleSubmit}>
      <NameFilter
        userNameFilter={props.userNameFilter}
        handleNameFilter={props.handleNameFilter}
      />
      <HouseFilter
        userHouseFilter={props.userHouseFilter}
        handleHouseFilter={props.handleHouseFilter}
      />
    </form>
  );
}
export default Filters;
