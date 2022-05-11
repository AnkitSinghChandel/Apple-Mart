import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <center>
                <h3 class="pt-5">Log in</h3>
                <form name="" action="" method="post">
                    <div class="row w-25 g-3 pt-4">
                        <div class="col-md-12  was-validated">
                            <input type="text" name="username" class="form-control" placeholder="Enter your username"
                                aria-label="username" required />

                        </div>
                        <div class="col-md-12 ">
                            <input type="password" name="password" class="form-control" placeholder="Enter your Password"
                                aria-label="Password" required />
                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-primary" value="login" />&nbsp; &nbsp;
                            <input type="reset" class="btn btn-primary" />
                        </div>
                    </div>
                    <div class="col w-25 g-3 pt-4">
                        <p class="" id="lasttext">if you don't have an account </p><br />
                        <Link class="btn btn-success " to="signup" role="button" id="crtacc">Create an Account</Link>
                    </div>
                </form>
            </center>
        </>
    )
}

export default Login;
