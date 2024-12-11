import React, { useState } from 'react'
import { auth } from '../../utils/firebase';
import { useNavigate } from "react-router";

import joinImg from '../../assets/registration.jpg';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';


function Registration() {
    let location = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                location('/joinUs');
            })
            .catch(err => console.log(err));
    }



    return (
        <MDBContainer className="my-5 main-container">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column main-card'>

                            <div className='d-flex flex-row mt-2 justify-content-center'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">The Exhibition App</span>
                            </div>
                            <form onSubmit={onRegisterSubmitHandler}>
                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create your account</h5>

                                <MDBInput value={email} className='form-label' wrapperClass='mb-4' label='Email address' size="lg" type='email' id='email' onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Type your email" required />
                                <MDBInput value={password} className='form-label' wrapperClass='mb-4' label='Password' size="lg" type='password' id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password must be more than 6 symbols" required />
                                <MDBInput className='form-label' wrapperClass='mb-4' label='Confirm password' id='formControlLg' type='password' size="lg" placeholder="Passwords must match" required />

                                <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Create</MDBBtn>
                            </form>

                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <a href="/JoinUs" style={{ color: '#393f81' }}>Login here</a></p>

                            <div className='d-flex flex-row justify-content-center'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardImage src={joinImg} alt="registration form" className='rounded-start w-100' />
                    </MDBCol>
                </MDBRow>
            </MDBCard>

        </MDBContainer>
    )
}

export default Registration