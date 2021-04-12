import React from 'react'
import{InfoSection,SingleSection}from "../../components"
import{homeObjOne,homeObjTwo} from './data'
const Contact = () => {
    return (
        <>
                <InfoSection {...homeObjOne}/>
                <SingleSection {...homeObjTwo}/>
        </>
    )
}

export default Contact
