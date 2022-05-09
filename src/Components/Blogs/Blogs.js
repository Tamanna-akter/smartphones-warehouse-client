import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5'>
            <Accordion>
            <Accordion.Item eventKey="0">
             <Accordion.Header>What are difference between javascript and nodejs?</Accordion.Header>
                <Accordion.Body>
                JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on googles v8 engine.JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.JavaScript can manipulate DOM or add HTML within whereas Node.js does not have the capability to add HTML. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development. JavaScript support multithreding programming but Node.js does not support multithreding programming.
               </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>What are the differences between sql and nosql databases?</Accordion.Header>
                <Accordion.Body>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases defines and manipulates data based structured query language whereas NoSQL database has dynamic schema for unstructured data. SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based. SQL are vertically scalable whereas NoSQL are horizontally scalable. SQL are not preferred for large datasets whereas NoSQL are largely preferred for large datasets.
                </Accordion.Body>
                </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                <Accordion.Body>
                    The purpose of jwt are: JSON is less verbose than XML, when it is encoded its size is also smaller, making JWT more compact than SAML.
                In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. When the authorization is granted, the authorization server returns an access token to the application. The application uses the access token to access a protected resource (like an API).
           </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;