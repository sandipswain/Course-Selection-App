// import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";

function App() {
  // const btnHandler = () => toast.success("Done", { position: "bottom-right" });

  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <h2>This is menu side</h2>
          </Col>
          <Col md={8}>
            <h2>This is content side</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
