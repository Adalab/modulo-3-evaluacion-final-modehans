import '../styles/components/Loader.scss';

const Loader = () => {
  return (
    <div className="containerLoader">
      <div className="canvas">
        <div className="scr">
          <div className="scar"></div>
          <div className="scar s2"></div>
        </div>
        <div className="glasses-left"></div>
        <div className="glasses-middle"></div>
        <div className="glasses-right"></div>
      </div>
    </div>
  );
};
export default Loader;
