import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./postUser.css";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:5000/api/user",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body : JSON.stringify(formData)
    })
    const data= await response.json(response);
    console.log(data);
    navigate("/");
    }catch(error){
      console.error(error.message);
    }
  };


  return (
    <div className="center-form">
      <h1>Add New user</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default PostUser;
