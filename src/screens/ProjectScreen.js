import React,{useState,useEffect} from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from "react-router-dom";
import '../style/Project.css';
import Project from '../components/Project';
import SecondaryPoster from '../components/SecondaryPoster';
const ProjectScreen = (props)=>{
    const { pathname } = useLocation();
    const [tech_list,set_TechList] = useState([
        "All",
        "Python",
        
        "Javascript",
        "React",
        
    ]); 

   const [projects,setProjects] = useState( 
    [
        {
            "id":"1",
            "title":"Pizza Store",
            "technology":"Django and Python ",
            "image":"/images/Pizza.JPG",
            "type":"Website",
            
        },
        {
            "id":"2",
            "title":"Tourisam Website",
            "technology":"Django and Python",
            "image":"/images/Tour.JPG",
            "type":"Website",
        },
        {
            "id":"3",
            "title":"Proshop",
            "technology":"React",
            "image":"/images/E_Comm.JPG",
            "type":"E-Commerce Solution",
        },
        {
            "id":"4",
            "title":"Car Zone",
            "technology":"Django and Python",
            "image":"/images/carsellwebsite.PNG",
            "type":"Website",
        },
       
        {
            "id":"5",
            "title":"Interior Designer Website",
            "technology":"React and Django",
            "image":"/images/Interior.PNG",
            "type":"Website",
        },

     
        {
            "id":"6",
            "title":"Healthy Mania",
            "technology":"Django - Python - Javascript",
            "image":"/images/healthymania.png",
            "type":"E-Commerce Solution",
        },
       
        
       
    ]

)
   const [selectedprojects,setSelectedProjects] = useState(projects)

    const [selectedType,setSelectedType] = useState("");  
    
    
    useEffect(()=>{
        setSelectedType("All");
        window.scrollTo(0, 0);
    },[pathname])

    const changeSelectedType = (type)=>{
            setSelectedType(type)
            if(type === "All"){
                setSelectedProjects(projects)
            }
            else{
                setSelectedProjects(projects.filter((project)=>{
                    
                    
                    if(project.technology.includes(type)){
                        return project
                    }
               
            }))
            }
            
    }
    console.log(selectedprojects)
    return(
        <div>
            <SecondaryPoster title={props.title}/>
        <section className="section-projects pt-4" style={{"marginBottom":"-16px"}}>
            <Container>
                    <Row className="row justify-content-center pb-3 ">
                <Col md={7} className="heading-section ftco-animate text-center">
                    <h2 className="my-4 project-title text-white">Recent Work</h2>
                    
                    
                </Col>
                </Row>
                <div class="button-group filters-button-group mb-3 mt-4" style={{'zIndex':'1'}}>
                   {tech_list.map((tech,index)=>{
                       return(
                        <Button className={`button ${tech == selectedType?'is-checked':''    }`} data-filter="*" onClick={()=>changeSelectedType(tech)} key={index}>{tech}</Button>
                       )
                   })}
                    
                </div>

                   <Row className="my-3">
                   <Col md={12} lg={12} sm={12} >
                   <div className="portfolio-list recent p-3">
                        {
                            selectedprojects.map((project,index)=>{
                                return(
                                    <Project project={project} index={index}/>
                                )
                            })
                        }
                    </div>
                     </Col>
                    </Row>
        
            </Container>
            
    </section>
        </div>
    )
}

export default ProjectScreen