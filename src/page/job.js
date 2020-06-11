import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, FormControl, Form, Button, Nav, Container, Jumbotron, Carousel,Dropdown } from 'react-bootstrap';
import JobCard from "../Components/JobCard"
import { useHistory, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux"


const QUERYSTR_PREFIX = "q";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default function Job(props) {
    let query = useQuery();
    let user = useSelector(state => state.user)

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
        if (tempArray.length == 0) {
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
        <div className="body">
            <div>
                <>
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand to="#home">ITVIEC</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to="#home" className="pr-3" >All Jobs</Link>
                            <Link to="#features" className="pr-3"  >IT Companies</Link>
                            <Link to="/logins" className="pr-3"  >Log In</Link>
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className="ml-5">
                                    User Info
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">User email:{user.email}</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>


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
                <Jumbotron fluid className="m-0" className="body">
                    <Container>


                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.rasmussen.edu/-/media/images/blogs/school-of-technology/402_sotjs_11122018-blog.jpg?la=en&hash=05AD6332CDDB1E966790DDB5D990477EFD64F28E"
                                    alt="First slide"
                                    className="image"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://studentloanhero.com/wp-content/uploads/best-cities-for-IT-jobs.jpg"
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.squarespace-cdn.com/content/v1/5a919aebda02bc813b5472f8/1571068274098-JKNL83FNQAHJJF3U7IIS/ke17ZwdGBToddI8pDm48kBNqPjcq_ZbNQ_THf030cZsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGIn1iJLOF_U12Cqb56ODdcUUQ8pyNBzdM2DzBB4xOO_IxmSVtPsqqjqs1pYpcayA/181030_Dane-Tech-jobs-1-million-new.jpg?format=1500w"
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </Jumbotron>
            </div>
            <div>
              
                <Container>
                    {allJobs && allJobs.map(item => <JobCard allJobs={item} key={item.id} />)}
                </Container>
            </div>
        </div>
    )

}    
