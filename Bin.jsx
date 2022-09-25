import React from "react";
import styled from "styled-components";
//import { Splide, SplideSlide } from "@splidejs/react-splide";

const arr = ["Bin 1", "Bin 2", "Bin 3"]

function Bin() {
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

    li{
        display: inline;
      }
     
    h4{
    }
`;

const Wrapper = styled.div`
    position: relative;
    padding-top: 15%;
`;

export default Bin