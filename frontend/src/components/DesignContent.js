import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {DesignComponent, CreateDesign} from "./DesignComponent"
import "./designContent.css"
import AuthService from '../services/auth.service'

const endpoint = 'http://localhost:8000/api'
const userId = AuthService.getCurrentUser().data.id;

function DesignContent() {
  const [ designs, setDesigns ] = useState( [] )

  useEffect ( ()=> {
    // getAllDesigns()
    getDesignsByUser();
  }, [])

  const getAllDesigns = async () => {
    const response = await axios.get(`${endpoint}/designs`)
    setDesigns(response.data)
  }

  const getDesignsByUser = async () => {
    const response = await axios.get(`${endpoint}/designs/user/${userId}`)
    setDesigns(response.data)
  }

  const deleteDesign = async (id) => {
    await axios.delete(`${endpoint}/design/${id}`)
    getAllDesigns()
  }

  return (
    <div id="designContentHeight">
      <div id="designContentBackground">
        { designs.map( (design) => (
          <DesignComponent key={design.id} id={design.id} name={design.name}/>
        ))} 
        <CreateDesign/>
        
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
