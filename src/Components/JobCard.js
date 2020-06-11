import React from 'react'
import { Row, Col, Badge } from 'react-bootstrap';
import moment from "moment";
import "../App.css";
import {
  
  Link
} from "react-router-dom";



export default function JobCard(props) {

    const jobSelect = () => {
        console.log("Select job here")
    }
    return (
        <div>
            <div className="job-content" onClick={() => jobSelect()}>
      <Row>
        <Col>
          <div className="jobcard-logo">
            <img src={props.allJobs.img} />
          </div>
        </Col>
        <Col xs={8} style={{color: "white"}}>
          <div className="jobcard-descriptions pl-md-4 pt-3">
            
            <Link to={`/jobs/${props.allJobs.id}`} style={{ marginRight: "10px" }}>
            <div className="jobcard-title " > {props.allJobs.title}</div>
            </Link>
            
           
            <div style={{color: "red"}}>$ {props.allJobs.salary}</div>
            <div>
              <ul className="benefit-list ml-4">
                {props.allJobs.benefits.map(benefit => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              {props.allJobs.tags.map(tag => (
                <Badge variant="success" className="badge-style ml-4">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
        <Col style={{color: "white"}}>
          <div className="date-location-box pt-3">
            {props.allJobs.isHotjob ? (
              <div  className="hotjob-label">Hot Job</div>
            ) : (
              <div></div>
            )}

            <div className="jobcard-location">
              <div>{props.allJobs.city}</div>
              <div>District {props.allJobs.district}</div>
            </div>
            <div className="job-time">{moment(props.allJobs.time).fromNow()}</div>
          </div>
        </Col>
      </Row>
    </div>
        </div>
    )
}
