import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const[formData,setFormData] = useState({
    email:'',
    name:'',
    password:''
  })

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respose = await fetch('http://localhost:5000/user/register', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const result = await respose.json();
      console.log(result)
      navigate('/login');
    } catch (error) {
      console.error(error.message)
    } finally {
      setFormData({
        email:'',
        name:'',
        password:''
      })
    }
  }


  return (
    <div className='center-form'>
      <Form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup
