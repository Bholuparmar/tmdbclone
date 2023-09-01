import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    {/* <a rel="noreferrer" href="https://www.facebook.com/rohitazadmalik/" target="_blank">
                                        <BsFacebook />
                                    </a> */}
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/alok-parmar-b250b7230/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    {/* <a rel="noreferrer" href="https://twitter.com/rohitazad" target="_blank">
                                        <BsTwitter />
                                    </a> */}
                                </li>
                                <li>
                                    {/* <a rel="noreferrer" href="https://stackoverflow.com/users/1365428/rohit-azad-malik" target="_blank">
                                        <BsStackOverflow />
                                    </a> */}
                                </li>
                                <li>
                                    {/* <a rel="noreferrer" href="https://rohitazadmalik.blogspot.com/" target="_blank">
                                        <BsGoogle />
                                    </a> */}
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/Bholuparmar" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    {/* <a rel="noreferrer" href="" target="_blank">
                                        <BsYoutube />
                                    </a> */}
                                </li> 
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>Mrs.Alok Singh Parmar<a href="" target="_blank" rel="noreferrer"> Radhe Radhe </a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;