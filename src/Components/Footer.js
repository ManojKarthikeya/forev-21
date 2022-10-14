
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import CatHomePage from '../data/categoriesHomepage';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'> */}
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}
        {/* <section>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}

      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <div className='text-uppercase fw-bold mb-4 mt-3'>
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                Spandu & Manu
              </div>
              <div>Developed by</div>
              <p>
              Asamani Manoj Karthikeya & Spandana Sirisinahal
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-3'>
              <div className='text-uppercase fw-bold mb-4'>Products</div>
                {CatHomePage.map((item)=>{return(    <p>
                <Link to={`/products/${item.category}`} className='text-reset'>
                        {item.name}
                      </Link>
                    </p>)
                
                })}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-3'>
              <div className='text-uppercase fw-bold mb-4'>Useful links</div>
              <p>
                <Link to='/profile' className='text-reset'>
                  Profile
                </Link>
              </p>
              <p>
                <Link to='/profile' className='text-reset'>
                  Change Password
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-3'>
              <div className='text-uppercase fw-bold mb-4'>Contact</div>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Hyderabad, Telangana, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                spanduandmanu@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 1234567890
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  )}