import React, {Fragment} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import project_schema from '../../inputs/data';;


const PageContent = () =>{
    const projects = project_schema;
    return(
        <Fragment>
            <Row>
                {projects.map((project, index)=>{
                    return (<Col key={index} xs={8} md={4} lg={3}><ProjectCard data={project}/></Col>)
                })}
            </Row>
        </Fragment>
    )
};

const ProjectCard = ({data}) =>{
    return(
        <div className="project-card">
            <Card style={{ width: '16rem', height: '16rem' }}>
            <Card.Body>
                <div  className="project-card d-flex flex-column align-items-center p-block-10">
                    <div><Card.Img src="./folder.png" style={{width:"5rem", height:"5rem"}}/></div>
                    <Card.Title>{data.projectName}</Card.Title>
                    
                {/* <Button variant="primary" size="sm">Go somewhere</Button> */}
                </div>
                <div className="m-block-10 d-flex flex-column align-items-start">
                        <p>Status: {data.progressStatus} </p>
                        <p>Lead: {data.projectLead} </p>
                        <p>Task Items:{Object.keys(data.taskList)} </p>
                </div>
            </Card.Body>
            </Card>
        </div>
    )
};



export default PageContent;

//1. used data dummy
//2. decide share component card or not
//3. focus on api
//4. mongodb database
//5. gracia-korompi