import React from "react";
import styled from "styled-components";
//import { Splide, SplideSlide } from "@splidejs/react-splide";

const arr = ["Bin 1", "Bin 2", "Bin 3"]

function Bin() {
    return (
        <Tile>
            {arr.map((x) => {
                return (
                        <span class="A">
                            {x}
                        </span>
                
                )
            })}
        </Tile>
    )
}

const Tile = styled.div`
margin: 1em 2em 1em 2em;

padding-bottom: 1em;
span.A{
    display: inline;
    font-size:1.5em;
    border-radius: 3px;
    width: 100px;
    height: 100px;
    padding-right: 1.5rem;

}
`;


export default Bin