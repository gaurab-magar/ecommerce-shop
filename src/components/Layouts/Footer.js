import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="text-light text-center fw-semi py-2" style={{backgroundColor:"#001F3F"}}>
            <section className='container border-bottom'>
                <div className="footer py-5 text-white">
                  <div className="container foot">
                    <div className="row d-flex justify-content-center align-items-start">
                      <div className="col-md-2">
                        <h5 className="fw-bold">THE Basics</h5>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">About TMDB</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Contact Us</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Support Forums</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">API</a>
                          </li>
                          <li>
                            <a href="#" className="text-light text-decoration-none">System Status</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <h5 className="fw-bold">GET INVOLVED</h5>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Contribution Bible</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Add New Movie</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Add New TV Show</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <h5 className="fw-bold">COMMUNITY</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, expedita.</p>
                      </div>
                      <div className="col-md-2">
                        <h5 className="fw-bold">LEGAL</h5>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Terms of Use</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">API Terms of Use</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#" className="text-light text-decoration-none">DMCA Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
            <section className="container py-3">
                <p className='mb-0 text-uppercase'>&copy; copyright by Gaurab magar . 2024 ECommerce  website</p>
            </section>
        </footer>
    </>
  )
}
