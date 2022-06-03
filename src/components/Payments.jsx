import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Payments = () => {
    return (
        <div>
        <Navbar/>
        <div class="card mt-50 mb-50">
            <div class="card-title mx-auto">
            <p><b>PAYMENTS</b></p>
            </div>
            <div class="nav">
                <ul class="mx-auto">
                    <li><a href="#">UPI</a></li>
                    <li class="active"><a href="#">Card</a></li>
                </ul>
            </div>
            <form>
                <span id="card-header">Saved cards:</span>
                <div class="row row-1">
                    <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/></div>
                    <div class="col-7">
                        <input type="text" placeholder="**** **** **** ****"/>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <div class="row row-1">
                    <div class="col-2"><img  class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png"/></div>
                    <div class="col-7">
                        <input type="text" placeholder="**** **** **** ****"/>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <span id="card-header">Add new card:</span>
                <div class="row-1">
                    <div class="row row-2">
                        <span id="card-inner">Card Holder Name</span>
                    </div>
                    <div class="row row-2">
                        <input type="text" placeholder=""/>
                    </div>
                </div>
                <div class="row three">
                    {/* <div class="col-7"> */}
                        <div class="row-1">
                        <div class="row row-2">
                        <span id="card-inner">Card Number</span>
                    </div>
                    <div class="row row-2">
                        <input type="text" placeholder=""/>
                    </div>
                        {/* </div> */}
                    </div>
                    <div class="col-2">
                        <span id="card-inner">Exp. date</span>
                        <input type="text" placeholder="MM/YY"/>
                    </div>

                    <div class="col-2">
                        <span id="card-inner">CVV</span>

                        <input type="text" placeholder=""/>
                    </div>
                </div>
                <button class="btns d-flex mx-auto text-light bg-success"><b>Add card</b></button>
            </form>
        </div><br />
        <Footer/>
        </div>
    );
}

export default Payments;