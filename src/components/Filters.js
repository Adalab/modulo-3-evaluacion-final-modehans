import '../styles/components/Filters.scss';
import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="formFilter" onSubmit={handleSubmit}>
      <FilterName
        userFilterName={props.userFilterName}
        handleFilterName={props.handleFilterName}
      />
      <FilterHouse
        userFilterHouse={props.userFilterHouse}
        handleFilterHouse={props.handleFilterHouse}
      />
    </form>
  );
}
export default Filters;
