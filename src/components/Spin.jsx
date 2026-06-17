import Spinner from "react-bootstrap/Spinner";
// import "bootstrap/dist/css";
function Spin() {
  return (
    <Spinner animation="grow" variant="success" size="sm" role="status">
      <span className="">Loading...</span>
    </Spinner>
  );
}

export default Spin;
