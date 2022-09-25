import Bin from "../Components/Bin";
import Slot from "../Components/Slot";
import SideBar from "../Components/SideBar";
import Rack from "../Components/Rack";
import styled from "styled-components";

function Pages() {
    return (
        <div>
          <Grid>
              <Nav>
                  <SideBar />
              </Nav>
              <RightContainer>
                  <Rack />
                  <Bin />
                  <Slot />
              </RightContainer>
          </Grid>
            
        </div>
    );

}

const Grid = styled.div`
display:grid;
grid-template-columns:25% 75%;
`;
const Nav = styled.div`
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
  text-decoration: none;
  font-weight: 500;
`;

const RightContainer = styled.div`
  background-color: black;
`;

export default Pages;