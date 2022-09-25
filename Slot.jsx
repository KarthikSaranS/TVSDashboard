import React from "react";
import styled from "styled-components";

const arr = ["Slot 1", "Slot 2", "Slot 3","Slot 4","Slot 5","Slot 6","Slot 7","Slot 8","Slot 9","Slot 10","Slot 11","Slot 12"]

function Slot() {
    return (
        <Grid>
            {arr.map((x)=>{
                return(
                    <Card>
                        <span class="A">
                            {x}
                        </span>
                    </Card>
                    
                )
            })}
        </Grid>
    )

}
// const Tile=styled.div`
//     span.A{
//         display: inline-block;
//         border-radius: 3px;
//         width: 100px;
//         height: 100px;
//         padding: 5px;
//         border: 1px solid blue;    
//         background-color: yellow; 
//     }
// `

const Grid=styled.div`
    width:90%;
    padding-top: 1em;
    padding-bottom: 1em;
    margin: 1em 2em 1em 2em;
    background-color: darkgrey;
    margin-top:2rem;
    display:grid;
    grid-template-columns: repeat(4,minmax(5rem,15em));
    grid-gap:3rem;
`
const Card=styled.div`
    
margin: 1em 2em 1em 2em;
    span.A{
        border-radius: 7%;
        display: inline-block;
        width: 200px;
        height: 100px;
        padding: 5px;   
        background-color: yellow; 
    }
`
export default Slot