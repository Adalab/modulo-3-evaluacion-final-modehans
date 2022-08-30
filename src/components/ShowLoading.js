import Loader from './Loader';

const ShowLoading = (props) => {
  if (props.isLoading) {
    return <Loader />;
  } else {
    return <>{props.children}</>;
  }
};
export default ShowLoading;
