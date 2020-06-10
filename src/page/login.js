import React,{useState} from 'react'
import { Navbar, FormControl, Form, Button, Nav, Container } from 'react-bootstrap';
import "../App.css";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {useSelector} from "react-redux"



export default function Login(props) {
    let user =useSelector(state=>state.user)
    let [userInfo, setUserInfo] = useState(null);
    
    let dispatch = useDispatch();
    let history = useHistory()
    
    const logIn = (e) => {
        e.preventDefault()// block to refresh the page
        let user = { email: '', password: '' };
        dispatch({ type: "LOGIN", payload: user })
        history.push('/jobs');
        console.log("Am i here")

    }
    return (
        <div>
            <div>

                <>

                    <div className="login-container">
                        <h1 className="Apps" style={{ color: "white" }}> itViec Login</h1>
                    </div>

                    <br />
                    <Form onSubmit={(e) => logIn(e)} style={{ width: "80%" }} className="ml-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserInfo(e.target.value)}  />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>

                </>

            </div>
        </div>
    )
}
