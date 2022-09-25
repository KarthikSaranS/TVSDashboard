import React from "react";
import styled from "styled-components";
//import { Splide, SplideSlide } from "@splidejs/react-splide";

const arr = ["A", "B", "C", "D","E"]

function Rack() {
    return (
        <Tile>
            {arr.map((x)=>{
                return(
                    <div className="B">
                        <span class="A">
                            {x}
                        </span>
                    </div>
                    
                )
            })}
        </Tile>
    )
}

const Tile=styled.div`

    span.A{
        text-align: center;
        font-size: 1.75em;

        height: 45px;
        width: 45px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block; 
    }
    .B{
        display: inline-block;
        padding:2rem;
    }

`


export default Rack