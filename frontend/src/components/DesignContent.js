import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DesignComponent from "./DesignComponent"
import "./designContent.css"

const endpoint = 'http://localhost:8000/api'

function DesignContent() {
  const [ designs, setDesigns ] = useState( [] )

  useEffect ( ()=> {
    getAllDesigns()
  }, [])

  const getAllDesigns = async () => {
    const response = await axios.get(`${endpoint}/properties`)
    setDesigns(response.data)
  }

  const deleteDesign = async (id) => {
    await axios.delete(`${endpoint}/property/${id}`)
    getAllDesigns()
  }

  return (
    <div id="designContentHeight">
      <div id="designContentBackground">
        { designs.map( (design) => (
          <DesignComponent key={design.id} id={design.id} name={design.name}/>
        ))} 
        
        {/* <DesignComponent/>
        <DesignComponent/>
        <DesignComponent/>
        <DesignComponent/>
        <DesignComponent/>
        <DesignComponent/>
        <DesignComponent/> */}
      </div>
    </div>
  );
}

export default DesignContent;
