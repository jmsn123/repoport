import React from 'react'
import { Container, Button,ButtonContainer } from "../../Global"
import {MasonSection,MasonItems} from './mason.styles'

const Mason = () => {

    return(
        <>
<Container>
<ButtonContainer><Button>Hello world</Button></ButtonContainer>
    
    <MasonSection>
    <MasonItems>
            Items
        </MasonItems> 
        <MasonItems>
            Items
        </MasonItems> 
        <MasonItems>
            Items
        </MasonItems>
        <MasonItems>
            Items
        </MasonItems> 
        <MasonItems>
            Items
        </MasonItems> 
        <MasonItems>
            Items
        </MasonItems>
    </MasonSection>
</Container>
</>
    )
};


export default Mason;