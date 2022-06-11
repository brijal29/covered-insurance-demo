import React,{useEffect} from 'react';
import { Navbar, Nav, Container, Row, NavDropdown,Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Services from '../components/Services';
import {useLocation} from 'react-router-dom';
import SecondaryPoster from '../components/SecondaryPoster'
const ServiceScreen = (props)=>{
    const {pathname} = useLocation();
    const services_list = [
        {
            "title":"Web Developement",
            "desc":"Building a Website and Web Application is very afforable and flexibale approach. We Develop fully customized,secured and Rapid Websites and Web Applications as per client's Requirements.",
            "img":"/images/Web_Development.png",
            "technologies":[{
                'name':'Python',
                'icon':'devicon-python-plain'
            },
            {
                'name':'Django',
                'icon':'devicon-django-plain'
            },
            {
                'name':'React',
                'icon':'devicon-react-plain'
            },
            {
                'name':'Javascript',
                'icon':'devicon-javascript-plain'
            },
            {
                'name':'Redux',
                'icon':'devicon-redux-original'
            },
           
            {
                'name':'Flask',
                'icon':'devicon-flask-plain'
            },
            {
                'name':'NodeJS',
                'icon':'devicon-nodejs-plain'
            }
        ],
        

        },
        {
            "title":"E-Commerce & CMS  Solution",
            "desc":"SSV INFOTECH will help you to push your store and e-commerce business on internet. We create customized and user friendly e-commerce platform and CMS  using various latest frameworks and technologies.",
            "img":"/images/ECommService.png",
            "technologies":[{
                'name':'Wordpress',
                'icon':'devicon-wordpress-plain'
            },
            {
                'name':'Magento',
                'icon':'devicon-magento-original'
            },
            {
                'name':'Django & React ',
                'icon':'devicon-django-plain'
            }
        ]

        },
        {
            "title":"Web Designing",
            "desc":"To get and attract more users to your website, the Design of the Website will play an important Role. We create a Responsive and Eye-Catching Web Frontend for you.",
            "img":"/images/Web_Design.png",
            "technologies":[{
                'name':'HTML',
                'icon':'devicon-html5-plain'
            },
            {
                'name':'CSS',
                'icon':'devicon-css3-plain'
            },
            {
                'name':'Bootstrap',
                'icon':'devicon-bootstrap-plain'
            },
            {
                'name':'JQuery',
                'icon':'devicon-jquery-plain'
            },
            {
                'name':'Tailwind',
                'icon':'devicon-tailwindcss-plain'
            },

        ]
            
        },
        {
            "title":"Mobile Applications",
            "desc":"We SSV INFOTECH develop creative Mobile Applications with high performance and Better User Interfaces. We use Native and Hybrid frameworks for development of Mobile Applications. ",
            "img":"/images/MobileApps.png",
            "technologies":[{
                'name':'React Native',
                'icon':'devicon-react-plain'
            },
            {
                'name':'Android',
                'icon':'devicon-android-plain'
            },
            {
                'name':'Flutter',
                'icon':'devicon-flutter-plain'
            }
            ]
            
        },
        

        {
            "title":"Database and Server Tools",
            "desc":"Data Storage and Management is most important point of every dynamic Web and Mobile Applications. We use latest and secured database storage for our apps. Deployment of Applications in proper and secured way on server is Necessary and Like paying attention.",
            "img":"/images/Database.png",
            "technologies":[{
                'name':'MySQL',
                'icon':'devicon-mysql-plain'
            },
            {
                'name':'PostgreSQL',
                'icon':'devicon-postgresql-plain'
            },
            {
                'name':'MongoDB',
                'icon':'devicon-mongodb-plain'
            },
            {
                'name':'Heroku',
                'icon':'devicon-heroku-plain'
            },
            {
                'name':'Digital Ocean',
                'icon':'devicon-digitalocean-plain'
            },
            {
                'name':'AWS',
                'icon':'devicon-amazonwebservices-original'
            }

        ]
            
        },
      
    ]
    const works_for =[
        {"title":'Finance','img':'/images/finance.png'},{"title":"Business","img":"/images/business.png"},
        {"title":'Education','img':'/images/Education.png'},{"title":'Health','img':'/images/Health.png'},
        {"title":'Shopping','img':'/images/market.png'},{"title":'Games','img':'/images/gamming.png'},
        {"title":'Logistic','img':'/images/logistic.png'},{"title":'Social Networking','img':'/images/social.png'}
    ]
    useEffect(()=>{
        
        window.scrollTo(0, 0);
    },[pathname])
    return(
       <div className="service_main">
           <SecondaryPoster title={props.title}/>
            <section className="ftco-section ftco-services main-services">
    	<div className="overlay"></div>
    	<Container>
    		<Row className="row justify-content-center  pb-2">
          <Col md={7} className="heading-section ftco-animate text-center">
            <h2 className="my-4 service-title">My Services</h2>
            
          </Col>
        </Row>
    	
          
          <Services services_list= {services_list}/>
        
    	</Container>
    </section>
       
       </div>
    )
}
export default ServiceScreen;