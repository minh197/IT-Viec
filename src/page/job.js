import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, FormControl, Form, Button, Nav, Container } from 'react-bootstrap';
import JobCard from "../Components/JobCard"
import { useHistory, useLocation } from "react-router-dom";

export default function Job(props) {
    const getJobData = async () => {
        let url = `http://localhost:3001/jobs`
        let data = await fetch(url)
        let result = await data.json()
        console.log("All jobs results here", result)
        setJobs(result)

    }

    let query = useQuery();

    const QUERYSTR_PREFIX = "q";

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const handleSearch = (e) => {
        let filteredJobs = allJobs;
        if (e) {
          e.preventDefault();
          history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
          console.log("whats the search term", keyword)
        }
        if (keyword) {
          filteredJobs = allJobs.filter(job =>
            job.title.toLowerCase().includes(keyword.toLowerCase())
          );
        }
        console.log("Am i here?")
        setJobs(filteredJobs);
      };
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
    const [allJobs, setJobs] = useState(null);
    let history=[];


   



       
       
        
        

        useEffect(() => {

            getJobData()
        }, [])

        useEffect(() => {
            handleSearch();
          }, [getJobData]);

        if (allJobs == null) {
            return (<div>Loading</div>)

        }
        return (
            <div>
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
                                <FormControl type="text" placeholder="Search Jobs..." className="mr-sm-2" onChange={(e) => keyword = e.target.value} />
                                <Button  variant="outline-info">Search</Button>
                            </Form>
                        </Navbar>
                        <br />

                    </>
                </div>
                <div>
                    <Container>
                        {allJobs && allJobs.map(item => <JobCard allJobs={item} key={item.id} />)}
                    </Container>
                </div>
            </div>
        )
    
}
