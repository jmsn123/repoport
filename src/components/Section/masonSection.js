import React from 'react'
import { Container,} from "../../Global"
import {MasonSection,MasonItems,PortfolioHeading} from './mason.styles'

const Mason = () => {

    return(
        <>
<Container>

    <PortfolioHeading>Hello world</PortfolioHeading>
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