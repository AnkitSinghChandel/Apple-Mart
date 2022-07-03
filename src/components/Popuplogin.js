import React from 'react'
import { Link } from 'react-router-dom'

const Popuplogin = () => {
    return (
        <>
            <center className="bg- text-">
                <h3 class="pt-2">Log in</h3>
                <form name="" action="" method="post">
                    <div class=" flex-column w-100 g-3 p-4 pt-2">
                        <div class="col-md-12  was-validated">
                            <input type="text" name="username" class="form-control" placeholder="Enter your username"
                                aria-label="username" required />
                        </div>
                        <br/>
                        <div class="col-md-12 ">
                            <input type="password" name="password" class="form-control" placeholder="Enter your Password"
                                aria-label="Password" required />
                        </div>
                        <br />
                        <div class="col">
                            <input type="submit" class="btn btn-primary" value="login" />&nbsp; &nbsp;
                            <input type="reset" class="btn btn-primary" />
                        </div>
                    </div>
                    <div class="col w-100 g-3">
                        <p class="px-3" id="lasttext">if you don't have an account <span> <Link class="" to="/signup" id="crtacc">signup</Link> here. </span> </p><br />
                        {/* <Link class="btn btn-success" to="/signup" role="button" id="crtacc">Create an Account</Link> */}
                    </div>
                </form>
            </center>
        </>
    )
}

export default Popuplogin;
