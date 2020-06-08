import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";
import moment from "moment";
import { Row, Col, Badge } from 'react-bootstrap';

export default function Detail() {
    const { id } = useParams();

    const jobSelect = () => {
        console.log("Select job here")
    }
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
           
                    <div className="job-content" onClick={() => jobSelect()}>
                        <Row>
                            <Col>
                                <div className="jobcard-logo">
                                    <img src={singleJob.img} />
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div className="jobcard-descriptions">
                                    <h2 className="jobcard-title">{singleJob.title}</h2>
                                    <div>$ {singleJob.salary}</div>
                                    <div>
                                        <ul className="benefit-list">
                                            {singleJob.benefits.map(benefit => (
                                                <li>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        {singleJob.tags.map(tag => (
                                            <Badge variant="secondary" className="badge-style">
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
    

