import Rack from "./Components/Rack";
import Bin from "./Components/Bin";
import Slot from "./Components/Slot";
import { Link } from "react-router-dom";
import styled from "styled-components";


function App() {
  return (
    <div className="App">
     
      <Nav>
      <h2>Tyre Company</h2>
      </Nav>
      <Rack />
      <Bin />
      <Slot />        
    </div>
  );
}

const Nav = styled.div`
  padding: 0rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
  text-decoration: none;
    font-weight: 500;
`;

export default App;
