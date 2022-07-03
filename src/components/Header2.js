import React from 'react'
import { Nav, Navbar, Container, Button, FormControl, Form } from 'react-bootstrap'
import ASC from './ASC.jpg'
import './Header.css';
import { BsGithub, BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn, BiUser } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';

const Header2 = () => {
    const state = useSelector((state) => state.addItem)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className='p-4'>
                <Container fluid >
                    <img src={ASC} alt="logo" id='flogo' />
                    <Navbar.Brand className="ps-5" href="#home">ASC-APPLE Mart</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        Put here form content if you want Collapse
                    </Navbar.Collapse> */}
                    <Form className="d-flex ps-5 w-100">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 searchbar h-25"
                            aria-label="Search"
                        />
                        {/* <AiOutlineSearch width={0} fontSize={90} color="red" /> */}
                        <Button variant="outline-success search h-25" >Search</Button>
                        <div className='text-white ms-5 text-muted d-flex'>
                            <a className='' href="mailto:ankitsinghchandel@gmail.com"><BsEnvelopeFill width={0} fontSize={30} /></a>
                            <a className='ps-4' href="https://github.com/AnkitSinghChandel"><BsGithub width={0} fontSize={30} /></a>
                            <a className='ps-4' href="tel:+918840356006"><BsFillTelephoneFill width={0} fontSize={30} /></a>
                            <span class="vertical-line"></span>
                        </div>
                        <div className='text-white w-100 ms-2'>
                            <BsFillTelephoneFill width={0} fontSize={15} color="red" /> +91 8840356006
                            <p class="h6 ps-4 text-muted">You can call me:</p>
                        </div>
                    </Form>
                </Container>
                <div className='text-white ms-auto mt-4 d-flex'>
                    <BiUser width={70} fontSize={30} className="mx-3" />

                    <Badge badgeContent={state.length} color="primary" className="mx-3">
                        <ShoppingCartIcon />
                    </Badge>
                    {/* <BsCartPlusFill width={70} fontSize={30} /> ({state.length}) */}
                </div>
            </Navbar>
            <Nav className="me-auto bg-dark justify-content-center">
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Product">Product</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </Nav>
        </>
    )
}

export default Header2;