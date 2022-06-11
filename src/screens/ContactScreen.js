import React,{useState} from 'react'
import SecondaryPoster from '../components/SecondaryPoster';
import { Container,Row,Col } from 'react-bootstrap';
import swal from 'sweetalert';
import ContactForm from '../components/ContactForm';
const ContactScreen = (props)=>{
    const {title } = props
    const [message, setMessage] = useState('')
    

    const makeMessage = (data)=>{
        setMessage(data)
        if(data.variant == "success"){
            swal("Success!", data.msg, data.variant);
        }
        else{
            swal("Oops!", data.msg, data.variant);
        }
    };
    return(
        <div>
                <SecondaryPoster title={title}/>
                <Container className="py-3">
                
                <Row className=" ">
                <Col md={6} className=" ">
                    <img src="/images/ContactUs.png" />
                </Col>
                <Col md={6} className="heading-section ftco-animate">
                    <h2 className="my-4 project-title" style={{"color":"#10375d","textAlign":'center'}}>{title}</h2>
                    <ContactForm makeMessage={makeMessage}/>
                </Col>
                </Row>
                
                </Container>
        </div>
    )
}
export default ContactScreen