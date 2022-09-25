import React from "react";
import styled from "styled-components";

function SideBar() {
    return (
        <Bar>
        <h2>Tyre Company</h2>
        <hr />
        <br />
        <h4>Ware house location</h4>
        <h3>Info</h3>
        <h4 id="loaded">Materials Loaded Under Ageing</h4>
        <br />
        <h4 id="completed">Material Ageing Completed</h4>
        <br />
        <h4 id="empty">Bin Empty</h4>
        <br />
        <h4 id="expired">Material Expired</h4>
        <br />
        </Bar>
    )
}

const Bar = styled.div`
    margin: 2rem 2rem 2.3rem 2rem;

    #loaded{
        background-color: yellow;
        padding: 8px;
        border-radius: 10px;
        min-height: 3rem;
    }
    #completed{
        background-color:chartreuse;
        padding: 8px;
        border-radius: 10px;
        min-height: 3rem;
    }
    #empty{
        background-color: grey;
        padding: 8px;
        border-radius: 10px;
        min-height: 3rem;
    }
    #expired{
        background-color: red;
        padding: 8px;
        border-radius: 10px;
        min-height: 3rem;
    }
`;


export default SideBar;