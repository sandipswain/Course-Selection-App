// import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Home from "./components/Home";

function App() {
  // const btnHandler = () => toast.success("Done", { position: "bottom-right" });

  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <LeftMenu />
          </Col>
          <Col md={8}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
