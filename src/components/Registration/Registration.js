import React from 'react'
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

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create your account</h5>

                            <MDBInput className='form-label' wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput className='form-label' wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
                            <MDBInput className='form-label' wrapperClass='mb-4' label='Confirm password' id='formControlLg' type='password' size="lg" />

                            <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Create</MDBBtn>
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