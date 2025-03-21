import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Modals from './Modals'

function Header() {
    const [modalShow, setModalShow] = useState(false);
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const renderTooltip = (props) => (
    //     <Tooltip  {...props}>
    //         <div>
    //             <h6>Your cart is empty.</h6>
    //             <p>Please add some items from the menu...</p>
    //             <Button variant="danger">Explore KFC menu</Button>
    //         </div>

    //     </Tooltip>
    // );
    return (
        <>
            <Navbar expand="lg" className="navbar navbar-expand-lg bg-danger " data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="images\kfc-logo.png" alt="KFC_logo" width="80" height="60" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "

                            navbarScroll
                        >
                            <Nav.Link href="#action1">Delivery</Nav.Link>
                            <Nav.Link href="#action2">Self-pickup</Nav.Link>
                            <Nav.Link href="#action2">Dine-in</Nav.Link>
                            <NavDropdown title="Select Country" id="navbarScrollingDropdown " data-bs-theme="light" variant="secondary">

                                <NavDropdown.Item href="#action3">Bahrain</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Oman</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Kuwait</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Qatar</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Saudi Arabia </NavDropdown.Item>

                            </NavDropdown>


                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 bg-light text-dark"
                                    aria-label="Search"
                                />
                                <Button variant="danger">Search</Button>
                            </Form>
                            <div className="popover-container">
                                <a className="nav-link px-2" id="popover-button" href="#">
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        // overlay={renderTooltip}
                                        overlay={<Popover>
                                            <Popover.Header > <h6>Your cart is empty.</h6></Popover.Header>
                                            <Popover.Body style={{ width: '210px', height: '120px' }}>

                                                <p>Please add some items from the menu...</p>
                                                <div className="container text-center">
                                                    <Button variant="danger">Explore KFC menu</Button>
                                                </div>
                                            </Popover.Body>
                                        </Popover>}
                                    >

                                        <i className='fas fa-shopping-cart' style={{ fontSize: '30px', color: 'white' }}></i>
                                    </OverlayTrigger>
                                </a>
                            </div>
                            <div className='mt-1'>
                                <Button variant="danger" onClick={() => setModalShow(true)}>
                                    Contact
                                </Button>
                                <Modals show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>


            {/* Carousels */}

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src="images\carousel1.jpg" alt="kfc-meals" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="images\carousel2.jpg" alt="kfc-meals" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="images\carosel3.jpg" alt="kfc-meals" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Header;