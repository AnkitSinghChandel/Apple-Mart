import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (

            <li className="list-group-item d-flex justify-content-between ">

                <h6 className="my-0">{item.title}</h6>

                <span className="text-muted">₹{item.price}</span>
            </li>

        );
    }

    return (

        <>
            <div className='container-fluid w-25 m-5 float-end'>
                <h4 className="list-group-item d-flex  justify-content-between mb-3">
                    <span className="text-primary ">Your cart</span>
                    <span className="badge bg-primary rounded-pill ">{state.length}</span>
                </h4>
                <ul className="list-group list-group-flush w-100 mb-3">
                    {state.map(itemList)}

                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (INR)</span>
                        <strong>₹{total}</strong>
                    </li>
                </ul>

                <form className="card ms-2 p-2  w-100">
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Promo Code" />
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </form>

            </div>

            {/* Billing Address */}

            <form name="" className='ms-5' action="" method="post">
                <h3 class="pt-5 text-primary">Billing Address</h3>
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
                        <input type="text" name="zip_code" class="form-control" id="zipcode" placeholder="Zip code"
                            aria-label="Zip code" pattern="[0-9]{6}$" required />
                    </div>
                    <div class="col-md-6 was-validated">
                        <select name="form-select" name="city" class="form-control" placeholder="Country" aria-label="City" required>
                            <option value="">select your Country </option>
                            <option value="India">India</option>
                            <option value="UK">UK</option>
                            <option value="US">US</option>
                            <option value="London">London</option>
                        </select>
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
                        <input type="date" name="date_of_birth" class="form-control" placeholder="Date of Birth"
                            aria-label="Date of Birth" required />
                    </div>
                    <div class="col-md-6  was-validated">
                        <input type="email" name="email" class="form-control" placeholder="Email" aria-label="Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                    </div>

                    <hr className="my-3" />

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address" />
                        <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address </label>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="save-info" />
                        <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                    </div>

                    <hr className="my-3" />
                    <h4 className="mb-3 text-primary">Payment</h4>

                    <div className="my-2">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                            <label className="form-check-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                        </div>
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label htmlFor="cc-name" className="form-label text-primary">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required />
                            <small className="text-muted">Full Name as displayed on card</small>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="cc-number" className="form-label text-primary">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-expiration" className="form-label text-primary">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-cvv" className="form-label text-primary">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                        </div>
                    </div>
                    <hr className="my-3" />
                    <Link to="/checkout" className="btn btn-outline-primary w-25 mb-5 mx-auto">Proceed To checkout</Link>
                </div>
            </form>
        </>
    )
}

export default Checkout;
