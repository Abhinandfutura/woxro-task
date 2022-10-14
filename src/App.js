import "./App.css";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Switch>
            <Route path="/*" element={<Navigation />} />
          </Switch>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

const Routes = styled.div`
  background-color: white;
  min-height: 90vh;
  @media (max-width: 1517px) {
    min-height: 89vh;
  }

  @media (max-width: 1821px) {
    min-height: 92vh;
  }
  @media (max-width: 1707px) {
    min-height: 91vh;
  }
`;
