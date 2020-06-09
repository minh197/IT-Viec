import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";
import moment from "moment";
import { Row, Col, Badge,Navbar,Form,FormControl,Button } from 'react-bootstrap';

export default function Detail() {
    const { id } = useParams();

   
    let jobs = [];
    const getDetailData = async () => {
        let url = `http://localhost:3001/jobs/${id}`
        console.log("here1", url)
        let data = await fetch(url)
        console.log("here2", data)
        let result = await data.json()
        setSingleJob(result)
        console.log("show result", result)
        console.log("Im here?")

    }

    const [singleJob, setSingleJob] = useState(null);

    useEffect(() => {

        getDetailData();
    }, [])

    if (singleJob == null) {
        return <div>Loading</div>;
    }

    return (

        <div>
             <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">ITVIEC</Navbar.Brand>
                  
                    <Form inline>
                        <FormControl type="text" placeholder="Search Jobs..." className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br />

            </>
        </div>
           
                    <div className="job-content" >
                        <Row>
                            <Col>
                                <div className="jobcard-logo">
                                    <img src={singleJob.img} />
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div className="jobcard-descriptions">
                                    <h2 className="jobcard-title">{singleJob.title}</h2>
                                    <div style={{color: "red"}}>$ {singleJob.salary}</div>
                                    <div>Benefits:
                                        <ul className="benefit-list">
                                            {singleJob.benefits.map(benefit => (
                                                <li>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Description:</h4>
                                        {singleJob.description}
                                    </div>
                                    <div>
                                        {singleJob.tags.map(tag => (
                                            <Badge variant="success" className="badge-style ml-4">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="date-location-box">
                                    {singleJob.isHotjob ? (
                                        <div className="hotjob-label">Hot Job</div>
                                    ) : (
                                            <div></div>
                                        )}

                                    <div className="jobcard-location">
                                        <div>{singleJob.city}</div>
                                        <div>District {singleJob.district}</div>
                                    </div>
                                    <div className="job-time">{moment(singleJob.time).fromNow()}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                
            
   </div>
    )}
    

