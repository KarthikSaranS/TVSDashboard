import React from "react";
import styled from "styled-components";
//import { Splide, SplideSlide } from "@splidejs/react-splide";

const arr = ["Rack 1", "Rack 2", "Rack 3", "Rack 4"]

function Rack() {
    return (
        <div>
            {arr.map((x) => {
                return (
                <Tile>
                    <ul>
                        <li>
                            <h4>{x}</h4>
                        </li>
                    </ul>
                </Tile>
                )
            })}
        </div>
    )
}

const Tile = styled.div`
    position: relative;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

    ul li{
        display: inline;
      }
     
    h4{
    }
`;

const Wrap = styled.div`
    float: right;
    padding-right: 20rem;
`;

export default Rack