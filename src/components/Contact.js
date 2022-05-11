import React from 'react'
import contact from "../images/contact.png";

const Contact = () => {
    return (
        <>
            <div className="col-12 text-center shadow-lg py-4 ">
                <h1>Have Some Question?</h1>
            </div>
            <div class="container-fluid float-end text-black my-5 !direction !spacing">
                <img src={contact} alt="logo" class=" float-start" height={400} width={400} />
                <p id="" class="h2 pt-4">Message Me</p>
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
        </>
    )
}

export default Contact;
