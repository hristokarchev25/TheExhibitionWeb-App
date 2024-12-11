import React, { useState } from 'react'
import "./JoinUs.css";
import { useNavigate } from "react-router";
import { auth } from '../../utils/firebase';
import joinImg from '../../assets/joinUs.png';
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

function JoinUs() {
    let location = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                location('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <MDBContainer className="my-5 main-container">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src={joinImg} alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column main-card'>

                            <div className='d-flex flex-row mt-2 justify-content-center'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">The Exhibition App</span>
                            </div>

                            <form onSubmit={onLoginFormSubmitHandler}>
                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                <MDBInput value={email} className='form-label' wrapperClass='mb-4' label='Email address' size="lg" type='email' id='email' onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Type your email" required />
                                <MDBInput value={password} className='form-label' wrapperClass='mb-4' label='Password' size="lg" type='password' id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password must be more than 6 symbols" required />

                                <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
                            </form>

                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/registration" style={{ color: '#393f81' }}>Register here</a></p>

                            <div className='d-flex flex-row justify-content-center'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    )
}

export default JoinUs