import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='cf-contact-us'>
            <div className='cf-contact-layer d-flex justify-content-center align-items-center'>
                <div className='h-75 w-75 row'>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <h1 className='cf-contact-us-text'>Contact Us</h1>
                    </div>
                    <div className='col-6 border bg-light rounded h-100 py-5'>
                        <InputGroup className="mt-5 w-75 mx-auto">
                        
                            <FormControl
                            placeholder="First Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            
                            />
                            <FormControl 
                                className='mx-2'
                                placeholder="Last Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"/>
                        </InputGroup>

                        <InputGroup className='my-3 w-75 mx-auto'>
                            <FormControl 
                                placeholder="Email"
                            />
                        </InputGroup>
                        <InputGroup className='my-3 w-75 h-25 mx-auto'>
                            <FormControl as="textarea" placeholder="Message" aria-label="With textarea" />
                        </InputGroup>
                        <Button className='btn btn-lg'>Submit</Button>

                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;