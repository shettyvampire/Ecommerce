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
                    {/* <li><a href="#">UPI</a></li> */}
                    {/* <li class="active"><a href="#">Card</a></li> */}
                </ul>
            </div>
            <form>
                <span id="card-header">UPI Payment:</span> <br/>
                <div class="row row-1">
                    <div class="col-2"><img class="img-fluid" src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/11/05/Google-Pay-India-Tez-new-icon.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5"/></div>
                    <div class="col-7">
                        <input type="text" placeholder="Gpay"/>
                    </div>
                </div>
                <div class="row row-1">
                    <div class="col-2"><img  class="img-fluid" src="https://cdn.icon-icons.com/icons2/730/PNG/512/paytm_icon-icons.com_62778.png"/></div>
                    <div class="col-7">
                        <input type="text" placeholder="Paytm"/>
                    </div>
                </div>
                <br/> <br/>
                <span id="card-header">Pay Using Card: </span> 
                <img  class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>
                <img  class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png"/>
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
                        <span id="card-inner">Exp Date</span>
                        <input type="text" placeholder="MM/YY"/>
                    </div>

                    <div class="col-2">
                        <span id="card-inner">CVV</span>

                        <input type="text" placeholder=""/>
                    </div>
                </div>
                <button class="btns d-flex mx-auto text-light bg-success"><b>Proceed</b></button>
            </form>
        </div><br />
        <Footer/>
        </div>
    );
}

export default Payments;