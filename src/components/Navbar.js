import React from 'react'
import ASC from "./ASC.jpg";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popuplogin from './Login';

const Navbar = () => {
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg ">
                <div class="container-fluid  ">
                    <b> <a id="ftxt" class="navbar-brand ps-4" href="#">ASC's APPLE MART</a> </b>
                    <a class="navbar-brand" href="#"> <img src={ASC} alt="logo" id='flogo' /> </a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center  " id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 ps-5 snip1175">
                            <li class="nav-item btn-sm btn-outline-primary">
                                <Link class="nav-link active" aria-current="page" to="/" data-hover="Home">Home</Link>
                            </li>
                            <li class="nav-item btn-sm btn-outline-primary">
                                <Link class="nav-link active" aria-current="page" to="/Product" data-hover="Product">Product</Link>
                            </li>
                            <li class="nav-item btn-sm btn-outline-primary">
                                <Link class="nav-link active" aria-current="page" to="/About" data-hover="About">About</Link>
                            </li>
                            <li class="nav-item btn-sm btn-outline-primary">
                                <Link class="nav-link active" aria-current="page" to="/Contact" data-hover="Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="container-fluid  justify-content-end">
                    <Link id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        class="btn btn-outline-primary me-2" to="#" role="button"><BiLogIn /> Login </Link>
                    <Link class="btn btn-outline-primary me-2" to="/Signup" role="button"><BiUserPlus /> Signup </Link>
                    <Link class="btn btn-outline-primary me-2" to="/cart" role="button"><BsCartPlusFill /> Cart  ({state.length})</Link>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Popuplogin onClick={handleClose}>Profile</Popuplogin>
                    </Menu>
                </div>
            </nav>

        </>
    )
}

export default Navbar;