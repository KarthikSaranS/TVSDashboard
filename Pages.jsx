import Bin from "../Components/Bin";
import Slot from "../Components/Slot";
import SideBar from "../Components/SideBar";
import Rack from "../Components/Rack";
import styled from "styled-components";

function Pages() {
    return (
        <div>
            <Nav>
                <SideBar />
            </Nav>
            <RightContainer>
                <Rack />
                <Bin />
                <Slot />
            </RightContainer>
        </div>
    );
}

const Nav = styled.div`
float: left;
width: 20%;
  padding: 0rem 0rem;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
  text-decoration: none;
    font-weight: 500;
`;

const RightContainer = styled.div`
  float: right;
  width: 80%;
  background-color: black;
`;

export default Pages;