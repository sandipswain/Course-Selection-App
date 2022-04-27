// import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="addCourse" element={<AddCourse />} />
              <Route path="allCourses" element={<AllCourses />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
