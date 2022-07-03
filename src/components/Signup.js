import React from 'react'

const Signup = () => {
    return (
        <>
            <center>
                <form name="" action="connect.php" method="post">
                    <h3 class="pt-5">Sign up</h3>
                    <div class="row w-50 g-3 pt-4">
                        <div class="col-md-6 was-validated">
                            <input type="text" name="first_name" class="form-control" placeholder="First name"
                                aria-label="First name" pattern="[a-z,A-Z]{1,20}$" required />
                        </div>
                        <div class="col-md-6 was-validated">
                            <input type="text" name="last_name" class="form-control" placeholder="Last name" aria-label="Last name"
                                pattern="[a-z,A-Z]{1,20}$" required />
                        </div>
                        <div class="col-md-6 was-validated">
                            <input type="tel" name="mobile_number" class="form-control" id="mobile" placeholder="Mobile Number"
                                aria-label="Mobile Number" pattern="[0-9]{10}$" required />
                        </div>
                        <div class="col-md-6 was-validated">
                            <select name="city" name="city" class="form-control" placeholder="City" aria-label="City" required>
                                <option value="">select a city </option>
                                <option value="kanpur">kanpur</option>
                                <option value="lucknow">lucknow</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Noida">Noida</option>
                            </select>
                        </div>

                        <div class="col-md-6 was-validated">
                            <input type="text" name="zip_code" class="form-control" id="zipcode" placeholder="Zip code"
                                aria-label="Zip code" pattern="[0-9]{6}$" required />
                        </div>
                        <div class="col-md-6 was-validated">
                            <input type="date" name="date_of_birth" class="form-control" placeholder="Date of Birth"
                                aria-label="Date of Birth" required />
                        </div>
                        <div class="col-md-6  was-validated">
                            <input type="email" name="email" class="form-control" placeholder="Email" aria-label="Email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                        </div>
                        <div class="col-md-6  was-validated">
                            <input type="text" name="username" class="form-control" placeholder="username" aria-label="username"
                                required />

                        </div>
                        <div class="col-md-6 ">
                            <input type="password" name="password" class="form-control" placeholder="Password" aria-label="Password"
                                required />
                        </div>
                    </div>
                    <div class="m-3 form-check w-25 ">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                        <label class="form-check-label" for="exampleCheck1">Check me out and remember your username and
                            password</label>
                    </div>
                    <div class="col w-50 g-3 pb-4" id="lasttext">
                        <input type="submit" class="btn btn-primary" value="Submit" />&nbsp; &nbsp;
                        <input type="reset" class="btn btn-primary" />
                    </div>
                </form>
            </center>
        </>
    )
}

export default Signup;
