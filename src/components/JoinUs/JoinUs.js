import React from 'react'
import "./JoinUs.css";
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
    return (
        <MDBContainer className="my-5 main-container">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src={joinImg} alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column main-card'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                            <MDBInput className='form-label' wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput className='form-label' wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                            <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
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