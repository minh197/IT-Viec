import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,FormControl,Form,Button,Nav } from 'react-bootstrap';

export default function job() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">ITVIEC</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">All Jobs</Nav.Link>
                        <Nav.Link href="#features">IT Companies</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Jobs..." className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br />
                
            </>
        </div>
    )
}
