import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully");
    e.target.reset();
  };
  return (
    
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center mt-3">
          <div className="col-md-6 col-sm-12  bg-secondary rounded">
            <h2 className="mb-3">Contact Us</h2>
            <Form onSubmit={handleSend}>
            <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control type="text" placeholder="subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <textarea
                   rows="10"
                  className="w-100"
                  placeholder=" Message"
                ></textarea>
              </Form.Group>
              <Button variant="primary" className="w-25 mb-1" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </div>
      </div>
   
  );
};

export default Contact;