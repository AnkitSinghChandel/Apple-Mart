import React from 'react'
import { BsFillTelephoneFill, BsWhatsapp, BsFillPinMapFill, BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaUserAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ASC from "./ASC.jpg";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container-fluid text-white float-start !spacing">
                    <div class="container-fluid text-black  !spacing">
                        <p id="Contactme" class="h2 ms-4  pt-4">Contact Me</p>
                        <p class="h6 ps-4">Get in touch</p>
                        <p class="h6 ps-4">You can use the further information to contact me:</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <ul class="list-group-item-light pt-5">
                                <FaUserAlt width={70} fontSize={30} /><b class="h6 ps-3">Ankit Singh</b>
                                <br /> <br />
                                <BsFillTelephoneFill width={70} fontSize={30} /><b class="h6 ps-3">(+91)
                                    8840356006</b>
                                <br /> <br />
                                <FaMapMarkerAlt width={70} fontSize={30} /><b class="h6 ps-3">177A, Bibipur
                                    Chakeri
                                    Kanpur</b>
                                <br /> <br />
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <ul class="list-group-item-light pt-5">
                                <FaEnvelope width={70} fontSize={30} /><b
                                    class="h6 ps-3">ankitsinghchandel100@gmail.com</b>
                                <br /> <br />
                                <BsWhatsapp width={70} fontSize={30} /><b class="h6 ps-3">8840356006</b>
                                <br /> <br />
                                <BsFillPinMapFill width={70} fontSize={30} /><b class="h6 ps-3">Pin
                                    Code-208008</b>
                                <br /> <br />
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <ul class="list-group-item-light pt-5">
                                <BsGithub width={70} fontSize={30} /><b
                                    class="h6 ps-3">"github.com/AnkitSinghChandel"</b>
                                <br /> <br />
                                <BsLinkedin width={70} fontSize={30} /><b class="h6 ps-3">ankit
                                    singh</b>
                                <br /> <br />
                                <BsInstagram width={70} fontSize={30} /><b
                                    class="h6 ps-3">ankit.singh.chandel_</b>
                                <br /> <br />
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <ul class="list-group-item-light pt-5">
                                <BsFacebook width={70} fontSize={30} /><b class="h6 ps-3">Coming Soon in
                                    Facebook</b>
                                <br /> <br />
                                <BsWhatsapp width={70} fontSize={30} /><b class="h6 ps-3">8840356006</b>
                                <br /> <br />
                                <BsInstagram width={70} fontSize={30} /><b
                                    class="h6 ps-3">ankit.singh.chandel_</b>
                                <br /> <br />
                            </ul>
                        </div>
                        <div class="container-fluid text-black !direction !spacing">
                            <p id="" class="h2  ps-4 pt-4">Message Me</p>
                            <form name="NAME" action="" method="post">
                                <div class="row w-50 g-3 ms-5 ps-4 pt-4">
                                    <div class="col-md-6 was-validated">
                                        <input type="text" class="form-control" name="first_name" placeholder="First name"
                                            aria-label="First name" pattern="[a-z,A-Z]{1,20}$" required />
                                    </div>
                                    <div class="col-md-6 was-validated">
                                        <input type="text" class="form-control" name="last_name" placeholder="Last name"
                                            aria-label="Last name" pattern="[a-z,A-Z]{1,20}$" required />
                                    </div>
                                    <div class="col-md-6 was-validated">
                                        <input type="tel" class="form-control" id="mobile" name="mobile_number"
                                            placeholder="Mobile Number" aria-label="Mobile Number" pattern="[0-9]{10}$"
                                            required />
                                    </div>
                                    <div class="col-md-6 was-validated">
                                        <select name="city" class="form-control" name="city" placeholder="City"
                                            aria-label="City" required>
                                            <option value="">select a city </option>
                                            <option value="kanpur">kanpur</option>
                                            <option value="lucknow">lucknow</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Noida">Noida</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 was-validated">
                                        <input type="text" class="form-control" name="zip_code" id="zipcode"
                                            placeholder="Zip code" aria-label="Zip code" pattern="[0-9]{5}$" required />
                                    </div>
                                    <div class="col-md-6 was-validated">
                                        <input type="date" class="form-control" name="date_of_birth" placeholder="Date of Birth"
                                            aria-label="Date of Birth" required />
                                    </div>
                                    <div class="col-md-6  was-validated">
                                        <input type="email" class="form-control" name="email" placeholder="email"
                                            aria-label="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                                    </div>
                                    <div class="col-md-6 ">
                                        <input type="password" class="form-control" name="password" placeholder="password"
                                            aria-label="password" required />
                                    </div>
                                    <div class="col-md-6 ">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject"
                                            aria-label="Subject" required />
                                    </div>
                                    <div class="col-md-12">
                                        <textarea name="comment" form="usrform" className="text_here"
                                            placeholder="Enter text here..." required></textarea><br /><br />
                                    </div>
                                    <div class="col">
                                        <input type="submit" class="btn btn-primary" value="Submit" />&nbsp; &nbsp;
                                        <input type="reset" class="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <center>
                        <b style={{ textAlign: 'center' }} class="text-black">created by THE ASC | © 2022 All rights reserved.</b>
                        <img id="imagelast" src={ASC} class="rounded mx-auto d-block" alt="logo" />
                    </center>
                </div>
            </footer>
        </>
    )
}

export default Footer;