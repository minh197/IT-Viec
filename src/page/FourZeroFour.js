import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function FourZeroFour() {
    return (
        <div className="text-center">
			<Jumbotron>
				<h1>It Viec: 404 Page Not Found</h1>
				<p>The page you are looking for cannot be found</p>
				<p>
					<img src="https://media.npr.org/assets/img/2012/12/17/mystery-list_custom-9c58a855ae7747d9f76edcebbf2c6e50d482a41d-s800-c85.jpg"  alt="person looking" className="mr-2" />
					
				</p>
                <Link to="/jobs">
						<Button variant="primary">Home</Button>
					</Link>
			</Jumbotron>
		</div>
    )
}
