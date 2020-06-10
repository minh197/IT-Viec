import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, FormControl, Form, Button, Nav, Container } from 'react-bootstrap';
import JobCard from "../Components/JobCard"
import { useHistory, useLocation ,Link} from "react-router-dom";
import {useSelector} from "react-redux"


const QUERYSTR_PREFIX = "q";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default function Job(props) {
    let query = useQuery();
     let user = useSelector(state=>state.user)

    let history = useHistory();
    console.log("What is the type of history", typeof history)
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
    const [allJobs, setJobs] = useState(null);
    const [originalList, setOriginalList] = useState(null)
    let tempArray = []

    const getJobData = async () => {
        let url = `http://localhost:3001/jobs`
        let data = await fetch(url)
        let result = await data.json()
        console.log("All jobs results here", result)
        setJobs(result)
        setOriginalList(result)
        tempArray = result
        console.log("What is the query value", query.get(QUERYSTR_PREFIX))
        searchByKeyWord();
    }





    const searchByKeyWord = (e) => {
        if (e) {
            e.preventDefault()// block to refresh the page
            history.push(`/jobs/?${QUERYSTR_PREFIX}=${keyword}`)
        }

        //if temp array is null then use the original list
        if(tempArray.length ==0){
            tempArray = originalList
        }
        let filteredJobs = tempArray

        console.log("This is my key word", keyword)
        

        
        if (keyword) { //when we have keyword
            filteredJobs = tempArray.filter(job =>
                job.title.toLowerCase().includes(keyword.toLowerCase())
            );


            setJobs(filteredJobs);
        };










    }


    useEffect(() => {

        getJobData()
    }, [])



    if (allJobs == null) {
        return (<div>Loading</div>)

    }
    return (
        <div>
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand to="#home">ITVIEC</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to="#home">All Jobs</Link>
                            <Link to="#features">IT Companies</Link>
                            <Link to="/logins">Log In</Link>

                        </Nav>
                        <Form inline onSubmit={(e) => searchByKeyWord(e)}>
                            <FormControl type="text" placeholder="Search Jobs..." className="mr-sm-2" onChange={(e) => setKeyword(e.target.value)} />
                            <Button variant="outline-info" type="submit" >Search</Button>
                        </Form>
                    </Navbar>
                    <br />

                </>
            </div>
            <div>
                <h2>User email:{user.email}</h2>
                <Container>
                    {allJobs && allJobs.map(item => <JobCard allJobs={item} key={item.id} />)}
                </Container>
            </div>
        </div>
    )

}    
